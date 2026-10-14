#!/usr/bin/env node
"use strict";

/*
Inventory an IBM i repository from its build files and source tree.
Classification comes from the documentation config. This script does not
embed application object names and does not write documentation pages.
Requires Node.js 18 or newer. No packages are installed.
*/

const fs = require("fs");
const path = require("path");

const ATTR_RE =
  /^(?:(?<private>private)\s+)?(?<key>[A-Za-z_][A-Za-z0-9_]*)\s*(?<op>::=|:=|\?=|\+=|=)\s*(?<value>.*)$/;
const VAR_RE =
  /^(?<key>[A-Za-z_][A-Za-z0-9_]*)\s*(?<op>::=|:=|\?=|\+=|=)\s*(?<value>.*)$/;
const TARGET_RE = /^(?<target>\S+)\s*:\s*(?<rest>.*)$/;

function parseArgs(argv) {
  const args = {
    root: ".",
    config: ".cursor/ibmi-documentation.json",
    output: null,
    check: false,
  };
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--check") args.check = true;
    else if (token === "--root") args.root = argv[++i];
    else if (token === "--config") args.config = argv[++i];
    else if (token === "--output") args.output = argv[++i];
    else {
      console.error("Unknown argument: " + token);
      process.exit(2);
    }
  }
  return args;
}

function toPosix(full, root) {
  const rel = path.relative(root, full);
  if (!rel || rel === ".") return ".";
  return rel.split(path.sep).join("/");
}

function readJson(file) {
  const text = fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "");
  return JSON.parse(text);
}

function ignored(rel, names, prefixes) {
  const parts = rel.split("/").filter(Boolean);
  if (parts.some((part) => names.has(part))) return true;
  return prefixes.some(
    (prefix) => rel === prefix || rel.startsWith(prefix.replace(/\/$/, "") + "/")
  );
}

function walk(dir, root, names, prefixes, out) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    const rel = toPosix(full, root);
    if (entry.isDirectory()) {
      if (names.has(entry.name)) continue;
      if (ignored(rel, names, prefixes)) continue;
      walk(full, root, names, prefixes, out);
    } else if (entry.isFile()) {
      if (!ignored(rel, names, prefixes)) out.push(full);
    }
  }
}

function nearestCcsid(startDir, root, ccsidName) {
  let current = startDir;
  const rootResolved = path.resolve(root);
  while (true) {
    const candidate = path.join(current, ccsidName);
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      try {
        const data = readJson(candidate);
        const build = data && data.build;
        return {
          directory: toPosix(current, root),
          source: toPosix(candidate, root),
          tgtCcsid: build ? build.tgtCcsid : null,
          parseError: false,
        };
      } catch (error) {
        return {
          directory: toPosix(current, root),
          source: toPosix(candidate, root),
          tgtCcsid: null,
          parseError: true,
        };
      }
    }
    if (path.resolve(current) === rootResolved || path.dirname(current) === current) {
      return null;
    }
    current = path.dirname(current);
  }
}

function parseMemberName(filename, config) {
  const member = config.discovery.memberName;
  const maxLen = Number(config.platform.objectNameMaxLength);
  const sep = member.descriptionSeparator || "";
  const tokens = new Set((member.typeTokens || []).map((item) => item.toUpperCase()));
  let extension = "";
  let stem = filename;
  const dot = filename.lastIndexOf(".");
  if (dot > 0) {
    stem = filename.slice(0, dot);
    extension = filename.slice(dot);
  }
  let typeToken = null;
  const inner = stem.lastIndexOf(".");
  if (inner > 0) {
    const maybe = stem.slice(inner + 1);
    if (tokens.has(maybe.toUpperCase())) {
      typeToken = maybe.toUpperCase();
      stem = stem.slice(0, inner);
    }
  }
  let description = null;
  let objectName = stem;
  if (sep && stem.includes(sep)) {
    const left = stem.slice(0, stem.indexOf(sep));
    const right = stem.slice(stem.indexOf(sep) + sep.length);
    if (left.length > 0 && left.length <= maxLen) {
      objectName = left;
      description = right;
    }
  }
  return { objectName, typeToken, extension, description };
}

function classifyFile(filePath, config) {
  const names = {};
  Object.keys(config.fileNames || {}).forEach((key) => {
    names[key.toLowerCase()] = config.fileNames[key];
  });
  const extensions = {};
  Object.keys(config.extensions || {}).forEach((key) => {
    extensions[key.toLowerCase()] = config.extensions[key];
  });
  const base = path.basename(filePath);
  if (names[base.toLowerCase()]) {
    return Object.assign({ classifiedBy: "fileName" }, names[base.toLowerCase()]);
  }
  const suffix = path.extname(filePath).toLowerCase();
  if (extensions[suffix]) {
    return Object.assign({ classifiedBy: "extension" }, extensions[suffix]);
  }
  return {
    class: "unclassified",
    language: null,
    role: "unclassified",
    classifiedBy: "none",
  };
}

function joinContinuations(text) {
  const lines = [];
  let pending = "";
  text.split(/\r?\n/).forEach((raw) => {
    if (raw.endsWith("\\")) {
      pending += raw.slice(0, -1);
      return;
    }
    lines.push(pending + raw);
    pending = "";
  });
  if (pending) lines.push(pending);
  return lines;
}

function splitTarget(token, typeSuffixes) {
  const dot = token.lastIndexOf(".");
  if (dot > 0) {
    const suffix = token.slice(dot + 1).toUpperCase();
    if (typeSuffixes.has(suffix)) return { name: token.slice(0, dot), objectType: suffix };
  }
  return { name: token, objectType: null };
}

function parseManifest(filePath, root, typeSuffixes) {
  const text = fs.readFileSync(filePath, "utf8");
  const directory = path.dirname(filePath);
  const manifest = {
    path: toPosix(filePath, root),
    directory: toPosix(directory, root),
    subdirs: [],
    variables: [],
    targets: [],
    comments: [],
  };
  let current = null;
  let pendingRecipe = null;

  function addTarget(token, rest, active) {
    const parts = splitTarget(token, typeSuffixes);
    const item = {
      token,
      objectName: parts.name,
      objectType: parts.objectType,
      active,
      directory: manifest.directory,
      manifest: manifest.path,
      prerequisites: rest ? rest.split(/\s+/).filter(Boolean) : [],
      attributes: [],
      recipes: [],
      class: null,
      language: null,
      role: null,
    };
    manifest.targets.push(item);
    return item;
  }

  function upsertTarget(token, rest, active) {
    const owner = manifest.targets.find((item) => item.token === token && item.active === active);
    if (!owner) return addTarget(token, rest, active);
    if (rest) owner.prerequisites.push(...rest.split(/\s+/).filter(Boolean));
    return owner;
  }

  joinContinuations(text).forEach((raw) => {
    if (raw.startsWith("\t") || (raw.startsWith(" ") && (current || pendingRecipe))) {
      const owner = current || pendingRecipe;
      if (owner) owner.recipes.push(raw.trim());
      return;
    }
    const stripped = raw.trim();
    if (!stripped) {
      pendingRecipe = current;
      current = null;
      return;
    }
    let active = true;
    let body = stripped;
    if (stripped.startsWith("#")) {
      body = stripped.slice(1).trim();
      if (!TARGET_RE.test(body)) {
        manifest.comments.push(stripped);
        current = null;
        pendingRecipe = null;
        return;
      }
      active = false;
    }
    const assignment = body.match(VAR_RE);
    if (assignment) {
      const key = assignment.groups.key;
      const value = (assignment.groups.value || "").trim();
      manifest.variables.push({ key, op: assignment.groups.op, value });
      if (key === "SUBDIRS") manifest.subdirs.push(...value.split(/\s+/).filter(Boolean));
      current = null;
      pendingRecipe = null;
      return;
    }
    const targetMatch = body.match(TARGET_RE);
    if (targetMatch) {
      const rest = (targetMatch.groups.rest || "").trim();
      const attr = rest.match(ATTR_RE);
      const token = targetMatch.groups.target;
      if (attr) {
        const owner = upsertTarget(token, "", active);
        owner.attributes.push({
          private: Boolean(attr.groups.private),
          key: attr.groups.key,
          op: attr.groups.op,
          value: (attr.groups.value || "").trim(),
        });
        current = owner;
        pendingRecipe = null;
        return;
      }
      current = upsertTarget(token, rest, active);
      pendingRecipe = null;
      return;
    }
    manifest.comments.push(stripped);
    current = null;
    pendingRecipe = null;
  });
  return manifest;
}

function listFilesCase(dir) {
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter((entry) => entry.isFile());
}

function resolveRelativeFile(base, relative) {
  const parts = relative.split(/[/\\]/).filter(Boolean);
  let current = base;
  for (const part of parts) {
    if (!fs.existsSync(current) || !fs.statSync(current).isDirectory()) return null;
    const found = fs
      .readdirSync(current, { withFileTypes: true })
      .find((entry) => entry.name.toLowerCase() === part.toLowerCase());
    if (!found) return null;
    current = path.join(current, found.name);
  }
  if (fs.existsSync(current) && fs.statSync(current).isFile()) return current;
  return null;
}

function resolvePrerequisite(token, rulesDir, root, byBasename, targetKeys, directoryVariable) {
  const raw = token.trim();
  if (directoryVariable && raw.startsWith(directoryVariable)) {
    const rewritten = raw.slice(directoryVariable.length).replace(/^[/\\]+/, "");
    const candidate = resolveRelativeFile(rulesDir, rewritten);
    if (candidate) return { kind: "file", path: toPosix(candidate, root), token: raw };
  }
  if (raw.includes("/") || raw.includes("\\")) {
    const fromRules = resolveRelativeFile(rulesDir, raw);
    if (fromRules) return { kind: "file", path: toPosix(fromRules, root), token: raw };
    const fromRoot = resolveRelativeFile(root, raw);
    if (fromRoot) return { kind: "file", path: toPosix(fromRoot, root), token: raw };
  }
  const local = listFilesCase(rulesDir).filter((entry) => entry.name.toLowerCase() === raw.toLowerCase());
  if (local.length === 1) {
    return { kind: "file", path: toPosix(path.join(rulesDir, local[0].name), root), token: raw };
  }
  const key = raw.toUpperCase();
  if (targetKeys.has(key)) {
    return { kind: "target", target: raw, token: raw, matches: targetKeys.get(key).length };
  }
  const basenameMatches = byBasename.get(raw.toLowerCase()) || [];
  if (basenameMatches.length === 1) {
    return { kind: "file", path: toPosix(basenameMatches[0], root), token: raw };
  }
  if (basenameMatches.length > 1) {
    return {
      kind: "ambiguous",
      token: raw,
      paths: basenameMatches.map((item) => toPosix(item, root)),
    };
  }
  return { kind: "unresolved", token: raw };
}

function isUnderTestConfig(filePath, root, testName) {
  let current = path.dirname(filePath);
  const rootResolved = path.resolve(root);
  while (true) {
    if (fs.existsSync(path.join(current, testName))) return true;
    if (path.resolve(current) === rootResolved || path.dirname(current) === current) return false;
    current = path.dirname(current);
  }
}

function lineCount(filePath) {
  try {
    const text = fs.readFileSync(filePath, "utf8");
    if (text.length === 0) return { lineCount: 0, encoding: "utf-8" };
    const lines = text.split(/\r?\n/).length;
    const count = text.endsWith("\n") || text.endsWith("\r") ? lines - 1 : lines;
    return { lineCount: count, encoding: "utf-8" };
  } catch (error) {
    return { lineCount: null, encoding: "not-utf-8" };
  }
}

function matches(rule, item) {
  const keys = ["roles", "classes", "objectTypes"];
  if (!keys.some((key) => Object.prototype.hasOwnProperty.call(rule, key))) return false;
  if (rule.roles && rule.roles.indexOf(item.role) === -1) return false;
  if (rule.classes && rule.classes.indexOf(item.class) === -1) return false;
  if (rule.objectTypes && rule.objectTypes.indexOf(item.objectType) === -1) return false;
  return true;
}

function firstSection(sections, item) {
  for (const section of sections) {
    if (section.page === "chapter") continue;
    if (matches(section.match || {}, item)) return section;
  }
  return null;
}

function buildInventory(root, config) {
  const typeSuffixes = new Set(config.buildSystem.objectTypeSuffixes.map((item) => item.toUpperCase()));
  const ccsidName = config.buildSystem.ccsidFileName;
  const testName = config.buildSystem.testConfigFileName;
  const directoryVariable = config.buildSystem.directoryVariable || "";
  const names = new Set(config.discovery.ignoreDirectoryNames);
  const outputDir = (config.package.outputDirectory || "").replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
  const prefixes = outputDir ? [outputDir] : [];
  const paths = [];
  walk(root, root, names, prefixes, paths);
  paths.sort((a, b) => toPosix(a, root).toLowerCase().localeCompare(toPosix(b, root).toLowerCase()));

  const byBasename = new Map();
  const files = {};
  paths.forEach((filePath) => {
    const rel = toPosix(filePath, root);
    const list = byBasename.get(path.basename(filePath).toLowerCase()) || [];
    list.push(filePath);
    byBasename.set(path.basename(filePath).toLowerCase(), list);
    const kind = classifyFile(filePath, config);
    const parsed = parseMemberName(path.basename(filePath), config);
    const counted = lineCount(filePath);
    let role = kind.role;
    if (
      (role === "program-source" || role === "definition") &&
      (path.basename(filePath).toLowerCase().includes(".test.") ||
        (path.basename(filePath).toLowerCase() !== testName.toLowerCase() &&
          isUnderTestConfig(filePath, root, testName)))
    ) {
      role = "test";
    }
    files[rel] = {
      path: rel,
      fileName: path.basename(filePath),
      class: kind.class,
      language: kind.language,
      role,
      classifiedBy: kind.classifiedBy,
      parsedObjectName: parsed.objectName,
      parsedTypeToken: parsed.typeToken,
      parsedDescription: parsed.description,
      objectName: null,
      objectType: parsed.typeToken,
      ccsid: nearestCcsid(path.dirname(filePath), root, ccsidName),
      lineCount: counted.lineCount,
      encoding: counted.encoding,
      section: null,
      pageOwner: null,
      template: null,
      skill: null,
      primaryOf: [],
      prerequisiteOf: [],
      inactiveTargets: [],
    };
  });

  const manifestName = config.buildSystem.manifest.toLowerCase();
  const manifests = paths
    .filter((filePath) => path.basename(filePath).toLowerCase() === manifestName)
    .map((filePath) => parseManifest(filePath, root, typeSuffixes));
  const targets = manifests.reduce((all, manifest) => all.concat(manifest.targets), []);
  const targetKeys = new Map();
  targets.forEach((target) => {
    if (!target.active) return;
    const key = target.token.toUpperCase();
    const list = targetKeys.get(key) || [];
    list.push(target);
    targetKeys.set(key, list);
  });

  const findings = [];
  targets.forEach((target) => {
    const rulesDir = target.directory === "." ? root : path.join(root, target.directory);
    target.resolvedPrerequisites = target.prerequisites.map((token) => {
      const item = resolvePrerequisite(token, rulesDir, root, byBasename, targetKeys, directoryVariable);
      if (item.kind === "unresolved") {
        findings.push({
          severity: "gap",
          type: "unresolved-prerequisite",
          manifest: target.manifest,
          target: target.token,
          token,
          active: target.active,
        });
      } else if (item.kind === "ambiguous") {
        findings.push({
          severity: "gap",
          type: "ambiguous-prerequisite",
          manifest: target.manifest,
          target: target.token,
          token,
          paths: item.paths,
        });
      } else if (item.kind === "target" && item.matches > 1) {
        findings.push({
          severity: "gap",
          type: "ambiguous-target-prerequisite",
          manifest: target.manifest,
          target: target.token,
          token,
        });
      }
      return item;
    });
    const filePrereqs = target.resolvedPrerequisites.filter((item) => item.kind === "file");
    target.primarySource = filePrereqs.length ? filePrereqs[0].path : null;
    target.composedFrom = target.resolvedPrerequisites
      .filter((item) => item.kind === "target")
      .map((item) => item.token);
    target.derived = !target.primarySource && target.recipes.length > 0;
    target.section = null;
    target.pageOwner = null;
    target.template = null;
    target.skill = null;
    if (target.objectName && target.objectName.length > Number(config.platform.objectNameMaxLength)) {
      findings.push({
        severity: "info",
        type: "object-name-length",
        target: target.token,
        objectName: target.objectName,
        maxLength: config.platform.objectNameMaxLength,
      });
    }
    if (!target.active) {
      findings.push({
        severity: "info",
        type: "commented-target",
        manifest: target.manifest,
        target: target.token,
        prerequisites: target.prerequisites,
      });
    }
  });

  const activePairs = new Map();
  targets.forEach((target) => {
    if (!target.active || !target.objectType) return;
    const key = target.objectName.toUpperCase() + "|" + target.objectType;
    const list = activePairs.get(key) || [];
    list.push(target);
    activePairs.set(key, list);
  });
  activePairs.forEach((group) => {
    if (group.length > 1) {
      findings.push({
        severity: "gap",
        type: "duplicate-object",
        objectName: group[0].objectName,
        objectType: group[0].objectType,
        manifests: group.map((item) => item.manifest),
      });
    }
  });

  targets.forEach((target) => {
    target.resolvedPrerequisites.forEach((item) => {
      if (item.kind !== "file" || !files[item.path]) return;
      files[item.path].prerequisiteOf.push({
        target: target.token,
        manifest: target.manifest,
        active: target.active,
      });
    });
    if (target.primarySource && files[target.primarySource]) {
      const owner = files[target.primarySource];
      if (target.active) {
        owner.primaryOf.push(target.token);
        owner.objectName = target.objectName;
        owner.objectType = target.objectType;
        if (
          owner.parsedObjectName &&
          owner.parsedObjectName.toUpperCase() !== target.objectName.toUpperCase()
        ) {
          findings.push({
            severity: "info",
            type: "parsed-name-differs-from-target",
            path: owner.path,
            parsedObjectName: owner.parsedObjectName,
            target: target.token,
          });
        }
      } else {
        owner.inactiveTargets.push(target.token);
      }
    }
  });

  Object.keys(files).forEach((key) => {
    const owner = files[key];
    const usedByActiveTarget = owner.prerequisiteOf.some((item) => item.active);
    if (
      owner.role === "program-source" &&
      owner.primaryOf.length === 0 &&
      owner.inactiveTargets.length === 0 &&
      usedByActiveTarget
    ) {
      owner.role = "include";
      if (owner.class !== "copy-member") owner.classifiedBy += "+prerequisite";
    }
  });

  targets.forEach((target) => {
    if (target.primarySource && files[target.primarySource]) {
      const src = files[target.primarySource];
      target.class = src.class;
      target.language = src.language;
      target.role = src.role;
    }
  });
  let progressed = true;
  while (progressed) {
    progressed = false;
    targets.forEach((target) => {
      if (target.class || !target.active) return;
      for (const pre of target.resolvedPrerequisites) {
        if (pre.kind !== "target") continue;
        const owners = targetKeys.get(pre.token.toUpperCase()) || [];
        if (owners.length === 1 && owners[0].class) {
          target.class = owners[0].class;
          target.language = owners[0].language;
          target.role = owners[0].role;
          target.classFrom = owners[0].token;
          progressed = true;
          break;
        }
      }
    });
  }
  targets.forEach((target) => {
    if (target.role || !target.objectType) return;
    target.role = ["PGM", "MODULE", "SRVPGM"].includes(target.objectType) ? "program-source" : "definition";
  });

  const sections = config.packageSections;
  const covered = new Set();

  function consider(item, identity, coveredPath) {
    if (item.section) return;
    const section = firstSection(sections, item);
    if (!section) return;
    item.section = section.id;
    item.template = section.template;
    item.skill = section.skill;
    item.pageOwner = identity;
    if (coveredPath) covered.add(coveredPath);
  }

  targets.forEach((target) => {
    if (!target.active) return;
    consider(target, "target:" + target.manifest + ":" + target.token, target.primarySource);
  });

  Object.keys(files).forEach((key) => {
    const owner = files[key];
    if (covered.has(owner.path)) {
      const ownerTarget = targets.find(
        (target) => target.primarySource === owner.path && target.active && target.section
      );
      owner.section = ownerTarget ? ownerTarget.section : owner.section;
      owner.template = ownerTarget ? ownerTarget.template : owner.template;
      owner.skill = ownerTarget ? ownerTarget.skill : owner.skill;
      owner.pageOwner = "primary-source";
      return;
    }
    consider(owner, "file:" + owner.path, owner.path);
  });

  sections.forEach((section) => {
    if (section.page !== "chapter") return;
    Object.keys(files).forEach((key) => {
      const owner = files[key];
      if (covered.has(owner.path) || owner.section) return;
      if (!matches(section.match || {}, owner)) return;
      owner.section = section.id;
      owner.template = section.template;
      owner.skill = section.skill;
      owner.pageOwner = "chapter:" + section.id;
      covered.add(owner.path);
    });
  });

  Object.keys(files).forEach((key) => {
    const owner = files[key];
    if (owner.class === "unclassified") {
      findings.push({ severity: "error", type: "unclassified", path: owner.path });
    }
    if (!owner.section) {
      findings.push({
        severity: "error",
        type: "unassigned",
        path: owner.path,
        class: owner.class,
        role: owner.role,
      });
    }
  });
  targets.forEach((target) => {
    if (target.active && !target.section) {
      findings.push({
        severity: "error",
        type: "unassigned-target",
        target: target.token,
        manifest: target.manifest,
        objectType: target.objectType,
        class: target.class,
        role: target.role,
      });
    }
  });

  const manifestDirs = new Map(manifests.map((item) => [item.directory, item]));
  const rootManifest = manifests.slice().sort((a, b) => a.directory.length - b.directory.length)[0];
  const reachable = new Set();
  if (rootManifest) {
    const stack = [rootManifest.directory];
    while (stack.length) {
      const current = stack.pop();
      if (reachable.has(current)) continue;
      reachable.add(current);
      const manifest = manifestDirs.get(current);
      if (!manifest) continue;
      const base = current === "." ? root : path.join(root, current);
      manifest.subdirs.forEach((subdir) => {
        const candidate = path.join(base, subdir);
        if (!fs.existsSync(candidate) || !fs.statSync(candidate).isDirectory()) {
          findings.push({
            severity: "gap",
            type: "subdir-missing",
            manifest: manifest.path,
            subdir,
          });
          return;
        }
        if (fs.existsSync(path.join(candidate, config.buildSystem.manifest))) {
          stack.push(toPosix(candidate, root));
        }
      });
    }
  }
  manifestDirs.forEach((manifest, directory) => {
    if (rootManifest && !reachable.has(directory)) {
      findings.push({ severity: "gap", type: "manifest-not-reachable", directory });
    }
  });

  const projectFiles = [];
  paths.forEach((filePath) => {
    const base = path.basename(filePath).toLowerCase();
    if (config.buildSystem.projectFileNames.map((name) => name.toLowerCase()).includes(base)) {
      const rel = toPosix(filePath, root);
      try {
        projectFiles.push({ path: rel, json: readJson(filePath) });
      } catch (error) {
        projectFiles.push({ path: rel, json: null, parseError: true });
      }
    }
  });

  const ccsidRows = [];
  const actions = [];
  paths.forEach((filePath) => {
    const base = path.basename(filePath).toLowerCase();
    const rel = toPosix(filePath, root);
    if (base === ccsidName.toLowerCase()) {
      const row = nearestCcsid(path.dirname(filePath), root, ccsidName);
      if (row) ccsidRows.push(row);
    }
    if (base === config.buildSystem.actionsFileName.toLowerCase()) {
      try {
        actions.push({ path: rel, json: readJson(filePath) });
      } catch (error) {
        actions.push({ path: rel, json: null, parseError: true });
      }
    }
  });

  const includePath = [];
  const settings = {};
  projectFiles.forEach((project) => {
    const body = project.json || {};
    if (Array.isArray(body.includePath)) includePath.push(...body.includePath);
    ["objlib", "curlib", "preUsrlibl", "postUsrlibl", "buildCommand", "compileCommand", "description", "repository"].forEach(
      (key) => {
        if (Object.prototype.hasOwnProperty.call(body, key)) settings[key] = body[key];
      }
    );
  });

  const byClass = {};
  const bySection = {};
  Object.keys(files).forEach((key) => {
    const owner = files[key];
    byClass[owner.class] = (byClass[owner.class] || 0) + 1;
    if (owner.section) bySection[owner.section] = (bySection[owner.section] || 0) + 1;
  });

  return {
    schemaVersion: 1,
    generator: "ibmi-source-inventory",
    summary: {
      files: Object.keys(files).length,
      manifests: manifests.length,
      targets: targets.length,
      activeTargets: targets.filter((item) => item.active).length,
      commentedTargets: targets.filter((item) => !item.active).length,
      unclassified: Object.keys(files).filter((key) => files[key].class === "unclassified").length,
      unassigned: Object.keys(files).filter((key) => !files[key].section).length,
      errors: findings.filter((item) => item.severity === "error").length,
    },
    counts: { byClass, bySection },
    build: {
      system: config.buildSystem.name,
      projectFiles,
      includePath,
      settings,
      ccsid: ccsidRows,
      actions,
    },
    manifests: manifests.map((item) => ({
      path: item.path,
      directory: item.directory,
      subdirs: item.subdirs,
      variables: item.variables,
      comments: item.comments,
    })),
    targets,
    files: Object.keys(files).map((key) => files[key]),
    findings,
  };
}

function missingTemplates(root, config) {
  const directory = path.join(root, config.package.templatesDirectory);
  const names = []
    .concat(config.packageSections.map((section) => section.template))
    .concat(config.chapters.map((chapter) => chapter.template));
  return [...new Set(names)].filter((name) => !fs.existsSync(path.join(directory, name))).sort();
}

function printSummary(inventory, missing) {
  const summary = inventory.summary;
  console.log("files: " + summary.files);
  console.log("manifests: " + summary.manifests);
  console.log("targets: " + summary.activeTargets + " active, " + summary.commentedTargets + " commented");
  console.log("unclassified: " + summary.unclassified);
  console.log("unassigned: " + summary.unassigned);
  console.log("errors: " + summary.errors);
  console.log("by class:");
  Object.keys(inventory.counts.byClass)
    .sort()
    .forEach((key) => console.log("  " + key + ": " + inventory.counts.byClass[key]));
  console.log("by section:");
  Object.keys(inventory.counts.bySection)
    .sort()
    .forEach((key) => console.log("  " + key + ": " + inventory.counts.bySection[key]));
  const interesting = inventory.findings.filter((item) =>
    ["unclassified", "unassigned", "unassigned-target", "unresolved-prerequisite", "subdir-missing", "manifest-not-reachable", "duplicate-object", "ambiguous-prerequisite"].includes(
      item.type
    )
  );
  const unbound = inventory.files.filter((item) => item.section === "unbound-source");
  if (unbound.length) {
    console.log("unbound-source:");
    unbound.forEach((item) => console.log("  " + item.path + " [" + item.class + "/" + item.role + "]"));
  }
  if (interesting.length) {
    console.log("findings:");
    interesting.forEach((item) => console.log("  " + item.type + ": " + JSON.stringify(item)));
  }
  if (missing.length) {
    console.log("missing templates:");
    missing.forEach((name) => console.log("  " + name));
  }
}

function main() {
  const args = parseArgs(process.argv);
  const root = path.resolve(args.root);
  const configPath = path.isAbsolute(args.config) ? args.config : path.join(root, args.config);
  const config = readJson(configPath);
  const inventory = buildInventory(root, config);
  const missing = missingTemplates(root, config);
  printSummary(inventory, missing);
  if (args.output) {
    const destination = path.isAbsolute(args.output) ? args.output : path.join(root, args.output);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, JSON.stringify(inventory, null, 2) + "\n", "utf8");
    console.log("wrote: " + destination);
  }
  if (args.check && (inventory.summary.errors || missing.length)) process.exit(1);
}

main();
