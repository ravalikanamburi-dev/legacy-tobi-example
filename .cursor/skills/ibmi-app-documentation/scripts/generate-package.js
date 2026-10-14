#!/usr/bin/env node
"use strict";

/*
Builds docs/application from the inventory and repository source.
Facts are copied from files. Missing facts use the configured unknown marker.
*/

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const UNKNOWN = "NOT EVIDENCED";
const root = path.resolve(process.argv[2] || ".");
const config = JSON.parse(fs.readFileSync(path.join(root, ".cursor/ibmi-documentation.json"), "utf8").replace(/^\uFEFF/, ""));
const outRoot = path.join(root, config.package.outputDirectory);
const inventoryPath = path.join(root, config.package.inventoryFile);

function runInventory() {
  const script = path.join(root, ".cursor/skills/ibmi-source-inventory/scripts/inventory.js");
  execFileSync(process.execPath, [script, "--root", root, "--output", inventoryPath, "--check"], {
    stdio: "inherit",
  });
}

function readText(rel) {
  const full = path.join(root, rel);
  try {
    return fs.readFileSync(full, "utf8");
  } catch (error) {
    return null;
  }
}

function linesOf(text) {
  return String(text || "").split(/\r?\n/);
}

function esc(value) {
  return String(value == null || value === "" ? "" : value)
    .replace(/\|/g, "\\|")
    .replace(/\r?\n/g, " ")
    .trim();
}

function safe(name) {
  return String(name || "object").replace(/[<>:"/\\|?*]/g, "_");
}

function relLink(fromRel, toRel) {
  let rel = path.relative(path.posix.dirname(fromRel), toRel).split(path.sep).join("/");
  if (!rel.startsWith(".")) rel = "./" + rel;
  return rel;
}

function specOf(line) {
  if (line.length < 6) return null;
  if (!/^[\d\s]{5}$/.test(line.slice(0, 5))) return null;
  const code = line[5].toUpperCase();
  if (!/[A-Z]/.test(code)) return null;
  return { code, body: line.slice(6) };
}

function headerComments(text) {
  const out = [];
  for (const line of linesOf(text)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^(\*|\/\/|\/\*|--+)/.test(trimmed) || /^\*/.test(trimmed)) out.push(trimmed);
    else break;
    if (out.length >= 8) break;
  }
  return out;
}

function formOf(text) {
  const hasFree = /\*\*free|\bctl-opt\b|\bdcl-proc\b|\bdcl-f\b/i.test(text);
  const hasFixed = linesOf(text).some((line) => {
    const spec = specOf(line);
    return spec && "HFDP".includes(spec.code);
  });
  if (hasFree && hasFixed) return "mixed fixed-form and free-form";
  if (hasFree) return "free-form";
  if (hasFixed) return "fixed-form";
  return null;
}

function grab(text, regex) {
  const found = [];
  const re = new RegExp(regex.source, regex.flags.includes("g") ? regex.flags : regex.flags + "g");
  let match;
  const lines = linesOf(text);
  lines.forEach((line, index) => {
    re.lastIndex = 0;
    while ((match = re.exec(line))) {
      found.push({ value: match[1] || match[0], line: index + 1, raw: line.trim() });
      if (!re.global) break;
    }
  });
  return found;
}

function ddsContent(line) {
  if (line.length >= 6 && line[5] === "A") return line.slice(6);
  return line;
}

function parseDds(text) {
  const records = [];
  const fileKeywords = [];
  let current = null;
  linesOf(text).forEach((line, index) => {
    const content = ddsContent(line);
    const trimmed = content.trim();
    if (!trimmed || trimmed.startsWith("*")) return;
    const record = /^\s*R\s+([A-Z0-9_@#$]+)\s*(.*)$/i.exec(content);
    if (record) {
      current = { name: record[1], keywords: record[2].trim(), fields: [], literals: [], line: index + 1 };
      records.push(current);
      return;
    }
    const quoted = [...trimmed.matchAll(/'([^']*)'/g)].map((item) => item[1]).filter(Boolean);
    const field = /^([A-Z][A-Z0-9_@#$]{0,9})\b(.*)$/i.exec(trimmed);
    const keywordOnly = /^(REF|UNIQUE|PFILE|JFILE|JFLD|JOIN|TEXT|COLHDG|EDTCDE|DFT|CHECK|ALTSEQ|FORMAT|SST|RENAME|DESCEND|ABSVAL|SFLSIZ|SFLPAG|SFLDSP|SFLDSPCTL|SFLCLR|SFLEND|SFLMSG|SFLNXTCHG|SFLCTL|SFLRCDNBR|OVERLAY|WINDOW|INDARA|DSPSIZ|PRINT|ERRSFL|PAGEDOWN|DSPATR|COLOR|EDTWRD|REFFLD|MSGID|ERRMSG|ERRMSGID|PUTOVR|FRCDTA|WHEN|WHERE|AND|NOT)\b/i.test(trimmed) || /^C[AF]\d\d\b/i.test(trimmed);
    if (field && !keywordOnly && !trimmed.startsWith("'")) {
      const rest = field[2] || "";
      const target = current || { name: "(file)", keywords: "", fields: fileKeywords, literals: [], line: 0 };
      if (!current) {
        fileKeywords.push({ name: field[1], rest: rest.trim(), text: (rest.match(/TEXT\('([^']*)'\)/i) || [])[1] || "", line: index + 1, raw: trimmed });
        return;
      }
      current.fields.push({
        name: field[1],
        rest: rest.trim(),
        text: (rest.match(/TEXT\('([^']*)'\)/i) || [])[1] || "",
        ref: (rest.match(/REFFLD\(([^)]*)\)/i) || [])[1] || "",
        line: index + 1,
        raw: trimmed,
      });
      quoted.forEach((literal) => current.literals.push({ text: literal, line: index + 1 }));
      return;
    }
    const bucket = current ? current : null;
    if (bucket && quoted.length && !field) {
      quoted.forEach((literal) => bucket.literals.push({ text: literal, line: index + 1 }));
    }
    if (!current) fileKeywords.push({ name: "", rest: trimmed, text: "", line: index + 1, raw: trimmed });
    else if (trimmed.length < 120) current.keywords += " " + trimmed;
  });
  return { records, fileKeywords };
}

function parseProgram(text, rel) {
  const lines = linesOf(text);
  const files = [];
  const copies = [];
  const calls = [];
  const procedures = [];
  const subroutines = [];
  const sql = [];
  const errors = [];
  const keys = [];
  const control = [];
  const dataAreas = [];
  const indicators = [];
  const panelLines = [];
  let lastFile = null;
  lines.forEach((line, index) => {
    const number = index + 1;
    const spec = specOf(line);
    const trimmed = line.trim();
    if (spec && spec.code === "F") {
      const named = /^(\S+)/.exec(spec.body.trim());
      if (named && !/^(indds|sfile|infds|rename|usropn|ignore|prefix|commit|keyloc)/i.test(named[1])) {
        lastFile = { name: named[1], raw: trimmed, line: number };
        files.push(lastFile);
      } else if (lastFile) lastFile.raw += " " + trimmed;
    }
    const dclf = /\bdcl-f\s+(\w+)/i.exec(trimmed);
    if (dclf) files.push({ name: dclf[1], raw: trimmed, line: number });
    const copy = /\/(?:copy|include)\s+['"]?([^'";]+)/i.exec(trimmed);
    if (copy) copies.push({ name: copy[1].trim(), line: number, raw: trimmed });
    const include = /^#include\s+[<"]([^>"]+)[>"]/.exec(trimmed);
    if (include) copies.push({ name: include[1], line: number, raw: trimmed });
    const ext = /extpgm\s*\(\s*'([^']+)'\s*\)/i.exec(trimmed);
    if (ext) calls.push({ name: ext[1], line: number, raw: trimmed, kind: "extpgm" });
    const cobolCall = /\bCALL\s+['"]([A-Z0-9@#$]+)['"]/i.exec(trimmed);
    if (cobolCall) calls.push({ name: cobolCall[1], line: number, raw: trimmed, kind: "CALL" });
    const proc = /\bdcl-proc\s+(\w+)/i.exec(trimmed);
    if (proc) procedures.push({ name: proc[1], line: number, raw: trimmed, export: /export/i.test(trimmed) });
    if (spec && spec.code === "P") {
      const name = spec.body.trim().split(/\s+/)[0];
      if (name && !/^e\b/i.test(name)) procedures.push({ name, line: number, raw: trimmed, export: /export/i.test(trimmed) });
    }
    const begsr = /\bbegsr\s+(\w+)/i.exec(trimmed);
    if (begsr) subroutines.push({ name: begsr[1], line: number, comment: commentBefore(lines, index) });
    if (/\bexec\s+sql\b/i.test(trimmed)) {
      sql.push({ raw: lines.slice(index, index + 3).join(" ").replace(/\s+/g, " ").trim(), line: number });
    }
    if (/\b(monmsg|sqlcode|sqlstate|sndpgmmsg|msgid\s*\()/i.test(trimmed)) {
      errors.push({ raw: trimmed, line: number });
    }
    const area = /dtaara\s*\(\s*'([^']+)'\s*\)/i.exec(trimmed);
    if (area) dataAreas.push({ name: area[1], line: number, raw: trimmed });
    if (spec && spec.code === "H") control.push(trimmed);
    else if (/\bctl-opt\b/i.test(trimmed)) control.push(trimmed);
    if (/\b(panel|step\d+)\b/i.test(trimmed) && /\b(when|if)\b/i.test(trimmed)) panelLines.push({ raw: trimmed, line: number });
    if (spec && spec.code === "D" && /\d+\s+\d+n?\b/.test(spec.body)) {
      indicators.push({ raw: trimmed, line: number });
    }
    if (/\b(exit|cancel|confirm|prompt|help|pagedown|refresh)\b/i.test(trimmed) && /\bif\b|\bwhen\b/i.test(trimmed)) {
      keys.push({ raw: trimmed, line: number });
    }
  });
  const programId = (text.match(/PROGRAM-ID\.\s*([A-Z0-9-]+)/i) || [])[1] || null;
  const clParms = grab(text, /PARM\s*\(([^)]+)\)/i).map((item) => item.raw);
  const clCalls = [];
  lines.forEach((line, index) => {
    const match = /^\s*CALL\s+(?:PGM\s*\()?\s*['"]?([A-Z0-9@#$]+)/i.exec(line);
    if (match && /clle|clp|\.cl/i.test(rel)) clCalls.push({ name: match[1], line: index + 1, raw: line.trim(), kind: "CALL" });
  });
  return {
    form: formOf(text),
    comments: headerComments(text),
    files,
    copies,
    calls: calls.concat(clCalls),
    procedures,
    subroutines,
    sql: sql.slice(0, 40),
    errors: errors.slice(0, 30),
    keys: keys.slice(0, 20),
    control,
    dataAreas,
    indicators: indicators.slice(0, 40),
    panelLines: panelLines.slice(0, 25),
    programId,
    clParms,
  };
}

function commentBefore(lines, index) {
  const prev = index > 0 ? lines[index - 1].trim() : "";
  if (/^(\/\/|\*)/.test(prev)) return prev;
  return "";
}

function parseSql(text) {
  const creates = [];
  const labels = [];
  linesOf(text).forEach((line, index) => {
    if (/^\s*(create|label)\b/i.test(line) || /--\s*%TEXT/i.test(line)) {
      creates.push({ raw: line.trim(), line: index + 1 });
    }
    const label = /LABEL\s+ON\s+[^(]+IS\s+'([^']*)'/i.exec(line);
    if (label) labels.push({ text: label[1], line: index + 1, raw: line.trim() });
    const meta = /--\s*%TEXT\s+(.+)/i.exec(line);
    if (meta) labels.push({ text: meta[1].replace(/\*+$/, "").trim(), line: index + 1, raw: line.trim() });
  });
  return { creates, labels };
}

function parseMessages(text) {
  const messages = [];
  linesOf(text).forEach((line, index) => {
    if (!/ADDMSGD/i.test(line)) return;
    const blob = line.trim();
    messages.push({
      id: (blob.match(/MSGID\(([^)]+)\)/i) || [])[1] || "",
      sev: (blob.match(/SEV\(([^)]+)\)/i) || [])[1] || "",
      ccsid: (blob.match(/CCSID\(([^)]+)\)/i) || [])[1] || "",
      text: (blob.match(/MSG\('([^']*)'/i) || [])[1] || blob,
      line: index + 1,
    });
  });
  const fileCcsid = (text.match(/CRTMSGF[\s\S]*?CCSID\(([^)]+)\)/i) || [])[1] || "";
  return { messages, fileCcsid };
}

function parseCommand(text) {
  const prompt = (text.match(/PROMPT\('([^']*)'\)/i) || [])[1] || "";
  const parms = [];
  linesOf(text).forEach((line, index) => {
    if (!/\bPARM\b/i.test(line)) return;
    parms.push({
      keyword: (line.match(/KWD\(([^)]+)\)/i) || [])[1] || "",
      type: (line.match(/TYPE\(([^)]+)\)/i) || [])[1] || "",
      len: (line.match(/LEN\(([^)]+)\)/i) || [])[1] || "",
      dft: (line.match(/DFT\(([^)]+)\)/i) || [])[1] || "",
      prompt: (line.match(/PROMPT\('([^']*)'\)/i) || [])[1] || "",
      line: index + 1,
      raw: line.trim(),
    });
  });
  return { prompt, parms };
}

function parseMenu(text) {
  const items = [];
  const keys = [];
  let group = "Menu";
  let pending = null;
  linesOf(text).forEach((line) => {
    const groupMatch = /:menugrp\.([^\n]+)/i.exec(line);
    if (groupMatch) {
      group = groupMatch[1].trim();
      return;
    }
    if (/:emenugrp|:emenu\b/i.test(line)) {
      pending = null;
      return;
    }
    if (/:menui\b/i.test(line)) {
      pending = { group, option: (line.match(/option=(\d+)/i) || [])[1] || "", action: "", help: "", label: "" };
      const action = /action='([^']*)'/i.exec(line);
      if (action) pending.action = action[1];
      return;
    }
    if (pending && /^\s*(action|help)=/i.test(line)) {
      const action = /action='([^']*)'/i.exec(line);
      if (action) pending.action = action[1];
      const help = /help=([^\s.]+)/i.exec(line);
      if (help) pending.help = help[1];
      return;
    }
    if (!pending) {
      const key = /:KEYI\s+KEY=(\S+)/i.exec(line);
      if (key) keys.push({ key: key[1], action: "", text: "" });
      const action = /ACTION='([^']*)'|ACTION=(\S+)/i.exec(line);
      if (action && keys.length) keys[keys.length - 1].action = action[1] || action[2];
      if (keys.length && !line.trim().startsWith(":") && line.trim() && !keys[keys.length - 1].text) keys[keys.length - 1].text = line.trim();
      return;
    }
    const action = /action='([^']*)'/i.exec(line);
    if (action) pending.action = action[1];
    const help = /help=([^\s.]+)/i.exec(line);
    if (help) pending.help = help[1];
    if (!line.trim().startsWith(":") && line.trim()) {
      const parts = line.trim().split(/\s{2,}/);
      pending.label = parts[0];
      pending.shownName = parts[1] || "";
      items.push(pending);
      pending = null;
    }
  });
  return { items, keys, title: (text.match(/^([A-Za-z].*Sample.*)$/m) || [])[1] || "" };
}

function parseHelp(text) {
  const helps = [];
  const re = /:help name=([^\s.]+)[.\s]*([^\n]*)/gi;
  let match;
  while ((match = re.exec(text))) {
    helps.push({ name: match[1], title: (match[2] || "").trim() });
  }
  return helps;
}

function parseBinder(text) {
  return grab(text, /EXPORT\s+SYMBOL\('([^']+)'\)/i).map((item) => ({
    symbol: item.value,
    line: item.line,
  }));
}

function parseBnddir(text) {
  return [...text.matchAll(/\(\*LIBL\/([A-Z0-9@#$]+)\s+\*([A-Z]+)\)/gi)].map((item) => ({
    name: item[1],
    type: item[2],
  }));
}

function prototypesOf(text) {
  const names = [];
  linesOf(text).forEach((line, index) => {
    const spec = specOf(line);
    const body = spec && spec.code === "D" ? spec.body : line;
    const match = /^\s*([A-Za-z@#$][\w@#$]*)\s+pr\b/i.exec(body) || /\bdcl-pr\s+(\w+)/i.exec(line);
    if (match) names.push({ name: match[1], line: index + 1, raw: line.trim() });
  });
  return names;
}

function attr(target, key) {
  return (target.attributes || []).find((item) => item.key.toUpperCase() === key.toUpperCase());
}

function cite(rel, line) {
  return line ? "`" + rel + "`:" + line : "`" + rel + "`";
}

function objectTexts(target, text, rel) {
  const texts = [];
  const textAttr = attr(target, "TEXT");
  if (textAttr) texts.push({ label: "build TEXT", value: textAttr.value, where: cite(target.manifest, null) });
  if (!text) return texts;
  const meta = text.match(/\/\*%%TEXT\s+([\s\S]*?)\*\//i) || text.match(/--\s*%TEXT\s+(.+)/i);
  if (meta) texts.push({ label: "source text", value: meta[1].replace(/\*+$/, "").trim(), where: cite(rel, null) });
  const sqlLabel = text.match(/LABEL\s+ON[\s\S]{0,80}IS\s+'([^']*)'/i);
  if (sqlLabel) texts.push({ label: "LABEL ON", value: sqlLabel[1], where: cite(rel, null) });
  if (text && !/\bR\s+\w+/.test(text)) {
    const crt = text.match(/\bTEXT\('([^']*)'\)/i);
    if (crt) texts.push({ label: "TEXT keyword", value: crt[1], where: cite(rel, null) });
  }
  return texts;
}

class Doc {
  constructor(title) {
    this.title = title;
    this.lines = ["# " + title, ""];
    this.unknowns = [];
    this.sources = new Set();
  }
  p(text) {
    this.lines.push(text, "");
  }
  h(text) {
    this.lines.push("## " + text, "");
  }
  h3(text) {
    this.lines.push("### " + text, "");
  }
  source(rel) {
    if (rel) this.sources.add(rel);
  }
  table(headers, rows) {
    if (!rows.length) {
      this.p("None are declared in the sources read for this page.");
      return;
    }
    this.lines.push("| " + headers.map(esc).join(" | ") + " |");
    this.lines.push("| " + headers.map(() => "---").join(" | ") + " |");
    rows.forEach((row) => this.lines.push("| " + row.map(esc).join(" | ") + " |"));
    this.lines.push("");
  }
  unknown(topic, missing, where) {
    this.unknowns.push({ topic, missing, where });
    return UNKNOWN;
  }
  text() {
    return this.lines.join("\n").replace(/\n{3,}/g, "\n\n") + "\n";
  }
}

function main() {
  runInventory();
  const inventory = JSON.parse(fs.readFileSync(inventoryPath, "utf8"));
  const files = inventory.files;
  const targets = inventory.targets.filter((target) => target.active);
  const fileByPath = new Map(files.map((file) => [file.path, file]));
  const pageByKey = new Map();
  const pages = [];
  const usedRels = new Set();

  function assignRel(section, name, type, salt) {
    let rel = section + "/" + safe(name) + "-" + safe(type || "SRC") + ".md";
    if (usedRels.has(rel)) rel = section + "/" + safe(name) + "-" + safe(type || "SRC") + "-" + safe(salt) + ".md";
    usedRels.add(rel);
    return rel;
  }

  targets.forEach((target) => {
    const rel = assignRel(target.section, target.objectName, target.objectType, target.directory);
    const page = { kind: "target", target, rel, section: target.section };
    pages.push(page);
    pageByKey.set((target.manifest + ":" + target.token).toUpperCase(), page);
    pageByKey.set(target.token.toUpperCase(), page);
  });
  const filePages = files.filter((file) => String(file.pageOwner || "").startsWith("file:"));
  filePages.forEach((file) => {
    const name = file.objectName || file.parsedObjectName || file.fileName;
    const type = file.objectType || file.class;
    const rel = assignRel(file.section, name, type, file.path);
    const page = { kind: "file", file, rel, section: file.section };
    pages.push(page);
    pageByKey.set(("FILE:" + file.path).toUpperCase(), page);
  });

  function linkToken(token, fromRel) {
    const page = pageByKey.get(String(token).toUpperCase());
    if (!page) return "`" + token + "`";
    return "[" + token + "](" + relLink(fromRel, page.rel) + ")";
  }

  function linkPath(filePath, fromRel) {
    const owner = fileByPath.get(filePath);
    if (owner && owner.pageOwner === "primary-source") return "`" + filePath + "`";
    const page = pageByKey.get(("FILE:" + filePath).toUpperCase());
    if (!page) return "`" + filePath + "`";
    const href = relLink(fromRel, page.rel);
    if (href === "./" + path.posix.basename(fromRel) || page.rel === fromRel) return "`" + filePath + "`";
    return "[" + filePath + "](" + href + ")";
  }

  function findNamed(name) {
    const key = String(name || "").toUpperCase();
    const matches = targets.filter((target) => target.objectName.toUpperCase() === key);
    const preferred = matches.find((target) => target.objectType === "PGM") || matches.find((target) => target.objectType === "CMD") || matches[0];
    return preferred || null;
  }

  const programExtract = new Map();
  function extractFile(filePath) {
    if (programExtract.has(filePath)) return programExtract.get(filePath);
    const file = fileByPath.get(filePath);
    const text = file && file.encoding === "not-utf-8" ? null : readText(filePath);
    const parsed = text == null ? null : parseProgram(text, filePath);
    programExtract.set(filePath, { text, parsed });
    return programExtract.get(filePath);
  }

  const binderExports = new Map();
  files.filter((file) => file.class === "binder-source").forEach((file) => {
    const text = readText(file.path);
    if (text) binderExports.set(file.path, parseBinder(text));
  });

  function serviceForCopy(copyName) {
    const token = copyName.split("/").pop().replace(/\..*$/, "").toUpperCase();
    const matches = [];
    binderExports.forEach((symbols, binderPath) => {
      const binderFile = fileByPath.get(binderPath);
      const protoFile = files.find((file) => file.role === "include" && (file.parsedObjectName || "").toUpperCase() === token || file.fileName.toUpperCase().startsWith(token));
      if (!protoFile) return;
      const protoText = readText(protoFile.path);
      if (!protoText) return;
      const names = prototypesOf(protoText).map((item) => item.name.toUpperCase());
      const overlap = symbols.filter((item) => names.includes(item.symbol.toUpperCase()));
      if (overlap.length) matches.push({ binderPath, symbols: overlap, objectName: binderFile ? binderFile.parsedObjectName : token });
    });
    return matches;
  }

  function writeTargetPage(page) {
    const target = page.target;
    const doc = new Doc(target.objectName + " (" + (target.objectType || target.class || "object") + ")");
    const sourceRel = target.primarySource;
    const sourceFile = sourceRel ? fileByPath.get(sourceRel) : null;
    const loaded = sourceRel ? extractFile(sourceRel) : { text: null, parsed: null };
    if (sourceRel) doc.source(sourceRel);
    doc.source(target.manifest);
    const texts = objectTexts(target, loaded.text, sourceRel);
    const ccsid = sourceFile && sourceFile.ccsid;
    doc.table(
      ["", ""],
      [
        ["Source", sourceRel ? linkPath(sourceRel, page.rel) : "No primary source file. Built from " + (target.composedFrom || []).join(", ")],
        ["Language", (sourceFile && sourceFile.language) || target.language || ""],
        ["Class", target.class || ""],
        ["Section", target.section],
        ["Object text", texts.map((item) => item.label + ": " + item.value).join("; ") || "No TEXT value is stored on the build rule or in a source header."],
        ["CCSID", ccsid && ccsid.tgtCcsid ? ccsid.tgtCcsid + " from `" + ccsid.source + "`" : UNKNOWN],
        ["Build manifest", "`" + target.manifest + "`"],
        ["Activation group", (attr(target, "ACTGRP") || {}).value || ""],
      ]
    );
    if (!texts.length) {
      doc.p("No TEXT value is stored on the build rule or in a source header (" + cite(target.manifest, null) + ").");
    } else {
      doc.h("Object text");
      doc.p("These strings are descriptions stored with the object. They are not, by themselves, a description of runtime behavior.");
      doc.table(["Kind", "Text", "Evidence"], texts.map((item) => [item.label, item.value, item.where]));
    }
    doc.h("Purpose");
    doc.p(purposeParagraph(target, loaded, texts, doc, page));
    doc.h("Build");
    doc.table(
      ["Prerequisite", "Resolved", "Evidence"],
      (target.resolvedPrerequisites || []).map((item) => [
        item.token,
        item.kind === "file" ? linkPath(item.path, page.rel) : item.kind === "target" ? linkToken(item.target || item.token, page.rel) : item.kind,
        cite(target.manifest, null),
      ])
    );
    if (target.recipes && target.recipes.length) {
      doc.h("Recipe");
      target.recipes.forEach((recipe) => doc.p("`" + recipe + "`"));
      if (target.recipes.some((recipe) => recipe.startsWith("!"))) {
        doc.p("A leading `!` is present. " + doc.unknown(target.token + " recipe prefix", "The repository does not define what the ! prefix means to the build tool.", cite(target.manifest, null)));
      }
    }
    const attributes = (target.attributes || []).filter((item) => item.key.toUpperCase() !== "TEXT");
    if (attributes.length) {
      doc.h("Build attributes");
      doc.table(
        ["Key", "Value", "Private", "Evidence"],
        attributes.map((item) => [item.key, item.value, item.private ? "yes" : "no", cite(target.manifest, null)])
      );
    }
    writeBody(doc, page, target.class, loaded, sourceRel);
    if (!target.primarySource && target.composedFrom && target.composedFrom.length) {
      doc.h("Composed from");
      doc.p("This target has no source member of its own. The modules or programs below hold the logic.");
      doc.table(
        ["Target", "Page"],
        target.composedFrom.map((token) => [token, linkToken(token, page.rel)])
      );
    }
    finish(doc, page);
    return doc;
  }

  function purposeParagraph(target, loaded, texts, doc, page) {
    const bits = [];
    if (texts.length) bits.push("The stored description is \"" + texts[0].value + "\" (" + texts[0].where + ").");
    const menuHit = menuItems().find((item) => calledName(item.action).toUpperCase() === target.objectName.toUpperCase());
    if (menuHit) {
      bits.push("Menu `" + menuFile() + "` option " + menuHit.option + " labels this \"" + menuHit.label + "\" and runs `" + menuHit.action + "`.");
    }
    if (loaded.parsed && loaded.parsed.comments.length) {
      bits.push("Header comments in the source: " + loaded.parsed.comments.slice(0, 3).join(" "));
    }
    if (loaded.text && (target.class === "display-file" || target.class === "printer-file")) {
      const sourceLines = linesOf(loaded.text);
      const literals = parseDds(loaded.text).records.flatMap((record) => record.literals).filter((item) => {
        const line = sourceLines[item.line - 1] || "";
        return item.text.length > 8 && !/PAGEDOWN|SFLMSG|CF\d\d|CA\d\d|MSGID/i.test(line);
      });
      if (literals.length) bits.push("A literal in the source reads \"" + literals[0].text + "\".");
    }
    if (loaded.text && (target.class === "physical-file" || target.class === "logical-file")) {
      const record = parseDds(loaded.text).records[0];
      if (record) bits.push("The source defines record `" + record.name + "`.");
    }
    if (!bits.length) {
      return "The sources read for this object do not state a business purpose (" + cite(target.primarySource || target.manifest, null) + ").";
    }
    return bits.join(" ");
  }

  let cachedMenu = null;
  let cachedMenuPath = null;
  function menuFile() {
    if (cachedMenuPath) return cachedMenuPath;
    const file = files.find((item) => item.class === "menu");
    cachedMenuPath = file ? file.path : "";
    return cachedMenuPath;
  }
  function menuItems() {
    if (cachedMenu) return cachedMenu;
    const rel = menuFile();
    const text = rel ? readText(rel) : "";
    cachedMenu = text ? parseMenu(text).items : [];
    return cachedMenu;
  }
  function calledName(action) {
    const match = /call\s+([A-Za-z0-9@#$]+)/i.exec(action || "");
    return match ? match[1] : "";
  }

  function writeBody(doc, page, cls, loaded, sourceRel) {
    const text = loaded.text;
    const parsed = loaded.parsed;
    if (text == null && sourceRel) {
      doc.p("The working tree file could not be read as UTF-8. Text was not invented.");
      doc.unknown(sourceRel, "File encoding is not UTF-8 in the working tree.", cite(sourceRel, null));
      return;
    }
    if (parsed && (parsed.files.length || parsed.calls.length || parsed.procedures.length || parsed.subroutines.length)) {
      writeProgramExtract(doc, page, parsed, sourceRel);
    }
    if (cls === "display-file" || cls === "printer-file" || cls === "physical-file" || cls === "logical-file") {
      writeDds(doc, text, sourceRel, cls);
    }
    if (cls && String(cls).startsWith("sql")) writeSql(doc, text, sourceRel);
    if (cls === "message-file") writeMessages(doc, text, sourceRel);
    if (cls === "command") writeCommand(doc, page, text, sourceRel);
    if (cls === "menu") writeMenu(doc, text, sourceRel);
    if (cls === "panel-group") writePanel(doc, text, sourceRel);
    if (cls === "binder-source" || cls === "binding-directory" || (page.target && page.target.objectType === "SRVPGM")) {
      writeService(doc, page, text, sourceRel);
    }
    if (cls === "system-trigger" || cls === "sql-trigger") writeTrigger(doc, text, sourceRel);
    if (cls === "data-area" || cls === "data-queue" || cls === "workstation-customizing") {
      doc.h("Definition");
      doc.p("The create command or source is cited below.");
      const body = linesOf(text).map((line) => line.trim()).filter(Boolean).slice(0, 20);
      body.forEach((line) => doc.p("`" + line + "`"));
      doc.source(sourceRel);
    }
    if (cls === "copy-member" || (page.file && page.file.role === "include")) writeCopy(doc, text, sourceRel);
    if (page.file && page.file.role === "test") writeTest(doc, text, sourceRel, parsed);
  }

  function writeProgramExtract(doc, page, parsed, sourceRel) {
    doc.source(sourceRel);
    if (parsed.form) doc.p("Source form in this member: " + parsed.form + " (" + cite(sourceRel, null) + ").");
    if (parsed.control.length) {
      doc.h("Control specifications");
      doc.table(["Line", "Text"], parsed.control.slice(0, 8).map((line, index) => [parsed.control[index] ? "" : "", line]).map((row, index) => [cite(sourceRel, null), parsed.control[index]]));
    }
    if (parsed.files.length) {
      doc.h("Files");
      doc.table(["File", "Declaration", "Evidence"], parsed.files.map((file) => [file.name, file.raw, cite(sourceRel, file.line)]));
    }
    if (parsed.copies.length) {
      doc.h("Copies and includes");
      doc.table(["Name", "Evidence"], parsed.copies.map((item) => [item.name, cite(sourceRel, item.line)]));
    }
    if (parsed.calls.length) {
      doc.h("Program calls");
      doc.table(
        ["Target", "Kind", "In this repository", "Evidence"],
        parsed.calls.map((call) => {
          const found = findNamed(call.name);
          if (!found) doc.unknown(call.name, "No source in this repository describes the called program " + call.name + ".", cite(sourceRel, call.line));
          return [call.name, call.kind, found ? linkToken(found.token, page.rel) : "external", cite(sourceRel, call.line)];
        })
      );
    }
    if (parsed.dataAreas.length) {
      doc.h("Data areas");
      doc.table(["Name", "Evidence"], parsed.dataAreas.map((item) => [item.name, cite(sourceRel, item.line)]));
    }
    if (parsed.sql.length) {
      doc.h("Embedded SQL");
      doc.table(["Statement start", "Evidence"], parsed.sql.map((item) => [item.raw.slice(0, 220), cite(sourceRel, item.line)]));
    }
    if (parsed.procedures.length) {
      doc.h("Procedures");
      doc.table(["Name", "Export", "Evidence"], parsed.procedures.map((item) => [item.name, item.export ? "export" : "", cite(sourceRel, item.line)]));
    }
    if (parsed.subroutines.length) {
      doc.h("Subroutines");
      doc.p("Names appear in source order. That order is not an execution trace.");
      doc.table(["Subroutine", "Nearby comment", "Evidence"], parsed.subroutines.map((item) => [item.name, item.comment, cite(sourceRel, item.line)]));
    }
    if (parsed.panelLines.length) {
      doc.h("Panel or step tests");
      doc.p("Only the conditions written in this member are listed.");
      doc.table(["Condition", "Evidence"], parsed.panelLines.map((item) => [item.raw, cite(sourceRel, item.line)]));
    }
    if (parsed.indicators.length) {
      doc.h("Indicator declarations");
      doc.table(["Declaration", "Evidence"], parsed.indicators.map((item) => [item.raw, cite(sourceRel, item.line)]));
    }
    if (parsed.keys.length) {
      doc.h("Key tests");
      doc.table(["Test", "Evidence"], parsed.keys.map((item) => [item.raw, cite(sourceRel, item.line)]));
    }
    if (parsed.errors.length) {
      doc.h("Error handling");
      doc.table(["Statement", "Evidence"], parsed.errors.map((item) => [item.raw.slice(0, 200), cite(sourceRel, item.line)]));
    }
    if (parsed.clParms.length) {
      doc.h("CL parameters");
      doc.table(["Declaration", "Evidence"], parsed.clParms.map((item) => [item, cite(sourceRel, null)]));
    }
    if (parsed.programId) doc.p("COBOL `PROGRAM-ID` is `" + parsed.programId + "` (" + cite(sourceRel, null) + ").");
  }

  function writeDds(doc, text, sourceRel, cls) {
    if (!text) return;
    doc.source(sourceRel);
    const dds = parseDds(text);
    doc.h(cls === "display-file" || cls === "printer-file" ? "Records" : "Layouts");
    if (dds.fileKeywords.length) {
      doc.h3("File-level source");
      doc.table(["Source line", "Evidence"], dds.fileKeywords.slice(0, 30).map((item) => [item.raw, cite(sourceRel, item.line)]));
    }
    dds.records.forEach((record) => {
      doc.h3(record.name);
      doc.p("Record `" + record.name + "` at " + cite(sourceRel, record.line) + (record.keywords ? ". Keywords: `" + record.keywords.trim().slice(0, 180) + "`." : "."));
      if (record.fields.length) {
        doc.table(
          ["Field", "Reference or definition", "Text", "Evidence"],
          record.fields.map((field) => [field.name, field.ref || field.rest.slice(0, 80), field.text, cite(sourceRel, field.line)])
        );
      }
      if ((cls === "display-file" || cls === "printer-file") && record.literals.length) {
        doc.p("User-visible literals, quoted from the source:");
        doc.table(["Literal", "Evidence"], record.literals.map((item) => [item.text, cite(sourceRel, item.line)]));
      }
    });
  }

  function writeSql(doc, text, sourceRel) {
    if (!text) return;
    doc.source(sourceRel);
    const sql = parseSql(text);
    doc.h("SQL source");
    doc.table(["Line", "Text"], sql.creates.map((item) => [cite(sourceRel, item.line), item.raw.slice(0, 220)]));
    if (sql.labels.length) {
      doc.p("Labels and metadata text are descriptions, not a record of who updates the data.");
      doc.table(["Text", "Evidence"], sql.labels.map((item) => [item.text, cite(sourceRel, item.line)]));
    }
  }

  function writeMessages(doc, text, sourceRel) {
    const parsed = parseMessages(text || "");
    doc.source(sourceRel);
    doc.p("File CCSID keyword: `" + (parsed.fileCcsid || UNKNOWN) + "` (" + cite(sourceRel, null) + ").");
    doc.h("Messages");
    doc.table(
      ["Id", "Severity", "CCSID", "Text", "Evidence"],
      parsed.messages.map((item) => [item.id, item.sev, item.ccsid, item.text, cite(sourceRel, item.line)])
    );
  }

  function writeCommand(doc, page, text, sourceRel) {
    const parsed = parseCommand(text || "");
    doc.source(sourceRel);
    doc.p(parsed.prompt ? "Prompt text: \"" + parsed.prompt + "\" (" + cite(sourceRel, null) + ")." : "Prompt text is " + UNKNOWN + ".");
    const processing = attr(page.target || { attributes: [] }, "CMD_PGM");
    if (processing) doc.p("Build attribute `CMD_PGM` names `" + processing.value + "` (" + cite(page.target.manifest, null) + ").");
    doc.h("Parameters");
    doc.table(
      ["Keyword", "Type", "Length", "Default", "Prompt", "Evidence"],
      parsed.parms.map((item) => [item.keyword, item.type, item.len, item.dft, item.prompt, cite(sourceRel, item.line)])
    );
  }

  function writeMenu(doc, text, sourceRel) {
    const parsed = parseMenu(text || "");
    doc.source(sourceRel);
    if (parsed.title) doc.p("Panel title text: \"" + parsed.title.trim() + "\" (" + cite(sourceRel, null) + ").");
    doc.h("Options");
    doc.table(
      ["Option", "Group", "Label", "Action", "Help"],
      parsed.items.map((item) => [item.option, item.group, item.label, item.action, item.help])
    );
    doc.h("Keys");
    doc.table(["Key", "Action", "Text"], parsed.keys.map((item) => [item.key, item.action, item.text]));
  }

  function writePanel(doc, text, sourceRel) {
    doc.source(sourceRel);
    const helps = parseHelp(text || "");
    doc.h("Help panels");
    doc.table(["Name", "Title in source"], helps.map((item) => [item.name, item.title]));
    const imports = grab(text || "", /pnlgrp=([A-Za-z0-9]+)/i);
    if (imports.length) doc.p("Imports panel group `" + imports[0].value + "` (" + cite(sourceRel, imports[0].line) + ").");
  }

  function writeService(doc, page, text, sourceRel) {
    const target = page.target;
    if (!target || target.objectType !== "SRVPGM") {
      if (text && /EXPORT\s+SYMBOL/i.test(text)) {
        doc.h("Exports");
        doc.table(["Symbol", "Evidence"], parseBinder(text).map((item) => [item.symbol, cite(sourceRel, item.line)]));
      }
      if (text && /\*SRVPGM/i.test(text)) {
        doc.h("Bound objects in the source");
        doc.table(["Object", "Type"], parseBnddir(text).map((item) => [item.name, item.type]));
        const listed = new Set((target ? target.prerequisites : []).map((item) => item.split(".")[0].toUpperCase()));
        const onlySource = parseBnddir(text).filter((item) => !listed.has(item.name.toUpperCase()));
        if (onlySource.length && target) {
          doc.h("Disagreement");
          doc.p("These source entries are not prerequisite names on the build target.");
          doc.table(["Object", "Type"], onlySource.map((item) => [item.name, item.type]));
          doc.unknown(target.token + " binding directory", "Binding directory source and build prerequisites do not list the same objects.", cite(sourceRel, null));
        }
      }
      return;
    }
    const siblings = files.filter((file) => (file.parsedObjectName || "").toUpperCase() === target.objectName.toUpperCase() && file.path !== sourceRel && (file.class === "binder-source" || file.class === "ile-service-program-script"));
    if (siblings.length) {
      doc.h("Other members with this object name");
      doc.p("The build primary source is " + (sourceRel ? "`" + sourceRel + "`" : "not a source file") + ". The members below share the object name.");
      siblings.forEach((file) => {
        doc.source(file.path);
        doc.p(linkPath(file.path, page.rel));
      });
    }
    const binder = [sourceRel, ...siblings.map((file) => file.path)].find((rel) => rel && fileByPath.get(rel) && fileByPath.get(rel).class === "binder-source");
    if (binder) {
      const symbols = binderExports.get(binder) || parseBinder(readText(binder) || "");
      doc.h("Binder exports");
      doc.table(["Symbol", "Evidence"], symbols.map((item) => [item.symbol, cite(binder, item.line)]));
      const signature = (readText(binder) || "").match(/SIGNATURE\('([^']*)'\)/i);
      if (signature) doc.p("Signature text: `" + signature[1] + "` (" + cite(binder, null) + ").");
    }
    if (sourceRel && fileByPath.get(sourceRel) && fileByPath.get(sourceRel).class === "ile-service-program-script") {
      doc.h("Create script");
      const script = readText(sourceRel) || "";
      const line = (script.match(/CRTSRVPGM[\s\S]*$/m) || [""])[0].replace(/\s+/g, " ").trim();
      if (line) doc.p("`" + line.slice(0, 500) + "` (" + cite(sourceRel, null) + ").");
    }
  }

  function writeTrigger(doc, text, sourceRel) {
    if (!text) return;
    doc.source(sourceRel);
    doc.h("Trigger source");
    linesOf(text).filter((line) => line.trim() && !line.trim().startsWith("/*") && !line.trim().startsWith("--%")).slice(0, 25).forEach((line) => doc.p("`" + line.trim() + "`"));
  }

  function writeCopy(doc, text, sourceRel) {
    if (!text) return;
    doc.source(sourceRel);
    const prototypes = prototypesOf(text);
    doc.h("Prototypes and declarations");
    doc.table(["Name", "Declaration", "Evidence"], prototypes.map((item) => [item.name, item.raw.slice(0, 120), cite(sourceRel, item.line)]));
    const users = [];
    files.forEach((file) => {
      if (!file.path || file.path === sourceRel) return;
      const loaded = file.role === "program-source" || file.class === "ile-rpg" || file.class === "ile-rpg-sql" ? extractFile(file.path) : null;
      if (!loaded || !loaded.parsed) return;
      const base = path.basename(sourceRel).toLowerCase();
      const stem = base.replace(/\..*$/, "");
      if (loaded.parsed.copies.some((item) => item.name.toLowerCase().includes(stem) || item.name.toLowerCase().includes(path.basename(sourceRel, path.extname(sourceRel)).toLowerCase()))) {
        users.push(file.path);
      }
    });
    if (users.length) {
      doc.h("Included from");
      doc.table(["Source"], users.map((item) => [item]));
    }
  }

  function writeTest(doc, text, sourceRel, parsed) {
    doc.source(sourceRel);
    doc.h("Test procedures");
    const procs = (parsed ? parsed.procedures : []).filter((item) => /^test_|setup|teardown/i.test(item.name));
    doc.table(["Procedure", "Evidence"], procs.map((item) => [item.name, cite(sourceRel, item.line)]));
    const asserts = [];
    linesOf(text).forEach((line, index) => {
      if (/\b(assert|nEqual|fail)\s*\(/i.test(line)) asserts.push({ raw: line.trim(), line: index + 1 });
    });
    doc.h("Assertions");
    doc.table(["Assertion", "Evidence"], asserts.slice(0, 40).map((item) => [item.raw.slice(0, 180), cite(sourceRel, item.line)]));
    doc.p("Cases that do not appear in this table are not asserted by this member.");
  }

  function writeFilePage(page) {
    const file = page.file;
    const doc = new Doc((file.objectName || file.parsedObjectName || file.fileName) + " (" + (file.class || "source") + ")");
    doc.source(file.path);
    const loaded = extractFile(file.path);
    const texts = objectTexts({ attributes: [], manifest: file.path, token: file.fileName }, loaded.text, file.path);
    doc.table(
      ["", ""],
      [
        ["Source", "`" + file.path + "`"],
        ["Language", file.language || ""],
        ["Class", file.class || ""],
        ["Role", file.role || ""],
        ["Build target", file.primaryOf.length ? file.primaryOf.join(", ") : "No active build target"],
        ["Inactive targets", file.inactiveTargets.join(", ")],
        ["CCSID", file.ccsid && file.ccsid.tgtCcsid ? file.ccsid.tgtCcsid + " from `" + file.ccsid.source + "`" : ""],
      ]
    );
    if (file.section === "unbound-source") {
      doc.p("This member has no active build target. It is still part of the repository.");
    }
    if (file.inactiveTargets.length) {
      doc.p("A commented build rule names " + file.inactiveTargets.join(", ") + ". The rule is inactive.");
    }
    doc.h("Purpose");
    doc.p(texts.length ? "Stored text: \"" + texts[0].value + "\" (" + texts[0].where + ")." : "The sources read for this member do not state a business purpose (" + cite(file.path, null) + ").");
    writeBody(doc, page, file.class, loaded, file.path);
    if (file.role === "include" && file.class !== "copy-member") writeCopy(doc, loaded.text, file.path);
    finish(doc, page);
    return doc;
  }

  const docs = new Map();
  function finish(doc, page) {
    if (!doc.unknowns.length) doc.p("No open question was raised from this page.");
    else {
      doc.h("Not evidenced");
      doc.table(["Topic", "What is missing"], doc.unknowns.map((item) => [item.topic, item.missing]));
    }
    docs.set(page.rel, doc);
  }

  pages.filter((page) => page.kind === "target").forEach((page) => writeTargetPage(page));
  pages.filter((page) => page.kind === "file").forEach((page) => writeFilePage(page));

  const allUnknowns = [];
  docs.forEach((doc, rel) => doc.unknowns.forEach((item) => allUnknowns.push(Object.assign({ page: rel }, item))));
  inventory.findings.forEach((finding) => {
    allUnknowns.push({
      page: "07-open-questions.md",
      topic: finding.type,
      missing: JSON.stringify(finding),
      where: finding.manifest || finding.path || finding.directory || "",
    });
  });

  function chapter(rel, title) {
    const doc = new Doc(title);
    return { rel, doc };
  }

  const readme = chapter("README.md", "Application documentation");
  const overview = chapter("01-system-overview.md", "System overview");
  const build = chapter("02-repository-and-build.md", "Repository and build");
  const areas = chapter("03-functional-areas.md", "Functional areas");
  const catalog = chapter("04-object-catalog.md", "Object catalog");
  const dependencies = chapter("05-dependencies.md", "Dependencies");
  const globalization = chapter("06-globalization.md", "Globalization and CCSID");
  const questions = chapter("07-open-questions.md", "Open questions");
  const trace = chapter("08-traceability.md", "Traceability");

  const project = (inventory.build.projectFiles[0] || {}).json || {};
  readme.doc.p("The tables below are the generated index of chapters and object pages. The explanation of the application is the guide at the top of this file. Where a page cannot prove a fact, it says " + UNKNOWN + ".");
  readme.doc.p("Project text in `iproj.json`: \"" + (project.description || "") + "\". Repository field: `" + (project.repository || UNKNOWN) + "`.");
  readme.doc.source("iproj.json");
  readme.doc.source("README.md");
  readme.doc.h("Chapters");
  readme.doc.table(
    ["Chapter", "Page"],
    [
      ["System overview", "[01-system-overview.md](01-system-overview.md)"],
      ["Repository and build", "[02-repository-and-build.md](02-repository-and-build.md)"],
      ["Functional areas", "[03-functional-areas.md](03-functional-areas.md)"],
      ["Object catalog", "[04-object-catalog.md](04-object-catalog.md)"],
      ["Dependencies", "[05-dependencies.md](05-dependencies.md)"],
      ["Globalization and CCSID", "[06-globalization.md](06-globalization.md)"],
      ["Open questions", "[07-open-questions.md](07-open-questions.md)"],
      ["Traceability", "[08-traceability.md](08-traceability.md)"],
    ]
  );
  const bySection = {};
  pages.forEach((page) => {
    bySection[page.section] = bySection[page.section] || [];
    bySection[page.section].push(page);
  });
  readme.doc.h("Object pages");
  readme.doc.table(
    ["Section", "Pages"],
    Object.keys(bySection).sort().map((section) => [section, String(bySection[section].length)])
  );
  Object.keys(bySection).sort().forEach((section) => {
    readme.doc.h3(section);
    readme.doc.table(
      ["Object", "Page"],
      bySection[section].map((page) => [page.target ? page.target.token : page.file.path, "[" + page.rel + "](" + page.rel + ")"])
    );
  });

  const readmeText = readText("README.md") || "";
  overview.doc.source("README.md");
  overview.doc.source(menuFile());
  overview.doc.h("What the repository says it is");
  overview.doc.p("The readable explanation of this repository is the guide at the top of [README.md](README.md). This chapter is the source-cited list of entry points.");
  overview.doc.p("`" + "README.md" + "` says:");
  overview.doc.p("> " + readmeText.trim().split(/\r?\n/).join("\n> "));
  overview.doc.p("`iproj.json` describes the project as \"" + (project.description || UNKNOWN) + "\" and names the license \"" + (project.license || UNKNOWN) + "\".");
  overview.doc.h("Entry points");
  overview.doc.p("The menu source is the operator entry point that this repository defines. Each row quotes that source. A called name with no build target is external: this package does not describe that program's behavior.");
  overview.doc.table(
    ["Option", "Group", "Label", "Action", "Resolved"],
    menuItems().map((item) => {
      const name = calledName(item.action);
      const named = name ? findNamed(name) : null;
      return [item.option, item.group, item.label, item.action, named ? linkToken(named.token, overview.rel) : name ? "no program target in this repository" : item.action];
    })
  );
  const commands = targets.filter((target) => target.objectType === "CMD");
  if (commands.length) {
    overview.doc.h("Commands");
    overview.doc.table(
      ["Command", "Page"],
      commands.map((target) => [target.token, linkToken(target.token, overview.rel)])
    );
  }
  overview.doc.h("Areas");
  overview.doc.p("The menu groups are the user-visible areas. Detail and the objects reached from each option are in [03-functional-areas.md](03-functional-areas.md).");
  const prose = files.filter((file) => file.role === "prose" || file.role === "license");
  overview.doc.h("Repository prose");
  overview.doc.table(
    ["Path", "What the file contains"],
    prose.map((file) => {
      const text = readText(file.path) || "";
      overview.doc.source(file.path);
      return [file.path, text.trim().split(/\r?\n/).slice(0, 4).join(" ").slice(0, 240)];
    })
  );

  build.doc.h("Project file");
  build.doc.source("iproj.json");
  build.doc.table(
    ["Setting", "Value", "Source"],
    ["description", "repository", "license", "objlib", "curlib", "preUsrlibl", "includePath", "buildCommand", "compileCommand"]
      .filter((key) => Object.prototype.hasOwnProperty.call(project, key))
      .map((key) => [key, Array.isArray(project[key]) ? project[key].join(", ") : String(project[key]), "`iproj.json`"])
  );
  build.doc.p("`" + (project.objlib || "&lib1") + "` is a build substitution. The concrete runtime library name is " + build.doc.unknown("runtime library", "iproj.json stores a substitution token, not a production library name.", "`iproj.json`") + ".");
  build.doc.h("How a build is started");
  build.doc.p("Editor actions in the repository name these commands. They are build entry points, not a job schedule.");
  (inventory.build.actions || []).forEach((actionFile) => {
    build.doc.source(actionFile.path);
    const list = Array.isArray(actionFile.json) ? actionFile.json : [];
    build.doc.table(
      ["Name", "Command", "Source"],
      list.map((item) => [item.name || "", item.command || "", actionFile.path])
    );
  });
  build.doc.h("Directories");
  build.doc.table(
    ["Directory", "Subdirectories", "Manifest"],
    inventory.manifests.map((manifest) => [manifest.directory, (manifest.subdirs || []).join(", "), manifest.path])
  );
  const unreachable = inventory.findings.filter((item) => item.type === "manifest-not-reachable");
  if (unreachable.length) {
    build.doc.h("Outside the default build");
    build.doc.p("These manifest directories exist, and the root subdirectory list does not include them. Their objects are documented. They are not part of the default build graph.");
    build.doc.table(["Directory", "Finding"], unreachable.map((item) => [item.directory, item.type]));
  }
  const commented = inventory.targets.filter((target) => !target.active);
  build.doc.h("Inactive targets");
  build.doc.table(
    ["Target", "Manifest", "Prerequisites"],
    commented.map((target) => [target.token, target.manifest, (target.prerequisites || []).join(", ")])
  );
  build.doc.h("Recipes");
  const recipes = targets.filter((target) => target.recipes && target.recipes.length);
  build.doc.table(
    ["Target", "Recipe"],
    recipes.map((target) => [target.token, target.recipes.join(" ")])
  );
  build.doc.h("Include path");
  build.doc.p("Copy members are resolved from the source directory and from `includePath` in `iproj.json`: " + (inventory.build.includePath || []).join(", ") + ".");
  const notes = files.filter((file) => file.role === "prose" && file.path.toLowerCase() !== "readme.md");
  notes.forEach((file) => {
    build.doc.h(file.path);
    build.doc.source(file.path);
    build.doc.p((readText(file.path) || "").trim());
  });

  const groups = new Map();
  menuItems().forEach((item) => {
    const list = groups.get(item.group) || [];
    list.push(item);
    groups.set(item.group, list);
  });
  areas.doc.p("Areas start from the menu groups in `" + menuFile() + "`. A name prefix is not used as a business area. Objects are attached only when a menu option calls them, when their build rule lists them under that program, or when that program copies a prototype those service programs export.");
  areas.doc.source(menuFile());
  const reached = new Set();
  groups.forEach((items, group) => {
    areas.doc.h(group);
    areas.doc.p("This heading is the menu group text.");
    const attached = new Map();
    items.forEach((item) => {
      const name = calledName(item.action);
      const named = name && findNamed(name);
      areas.doc.h3("Option " + item.option + " — " + item.label);
      areas.doc.p("Action `" + item.action + "`" + (item.help ? ", help name `" + item.help + "`" : "") + " (" + cite(menuFile(), null) + ").");
      if (!named) {
        const related = name ? targets.filter((target) => target.objectName.toUpperCase().startsWith(name.toUpperCase())) : [];
        areas.doc.p(name ? "No build target is named `" + name + "`. Behavior of that call is " + areas.doc.unknown(name || item.action, "The menu calls a name that has no source in this repository.", cite(menuFile(), null)) + "." : "The action is not a `CALL`. This repository does not include the query or command definition named in the action.");
        if (related.length) {
          areas.doc.p("Targets whose names start with `" + name + "` are listed so they can be compared with the menu. They are not proof that the menu runs them.");
          areas.doc.table(["Object", "Type", "Page"], related.map((target) => [target.token, target.objectType, linkToken(target.token, areas.rel)]));
        }
        return;
      }
      reached.add(named.token.toUpperCase());
      const rows = [[named.token, "menu program", linkToken(named.token, areas.rel)]];
      const seen = new Set([named.token.toUpperCase()]);
      function attachTarget(token, why) {
        const key = String(token).toUpperCase();
        if (seen.has(key)) return;
        const match = targets.find((target) => target.token.toUpperCase() === key);
        if (!match) return;
        seen.add(key);
        reached.add(match.token.toUpperCase());
        rows.push([match.token, why, linkToken(match.token, areas.rel)]);
        if (match.objectType === "CMD") {
          const processing = attr(match, "CMD_PGM");
          if (processing) attachTarget(processing.value + ".PGM", "command processing program");
        }
      }
      (named.resolvedPrerequisites || []).forEach((pre) => {
        if (pre.kind === "target" && !String(pre.token).toUpperCase().endsWith(".BNDDIR")) attachTarget(pre.token, "build prerequisite");
      });
      const loaded = named.primarySource ? extractFile(named.primarySource) : null;
      if (loaded && loaded.parsed) {
        loaded.parsed.calls.forEach((call) => {
          const match = findNamed(call.name);
          if (match && !seen.has(match.token.toUpperCase())) {
            seen.add(match.token.toUpperCase());
            reached.add(match.token.toUpperCase());
            rows.push([match.token, "called from source", linkToken(match.token, areas.rel)]);
            (match.resolvedPrerequisites || []).forEach((pre) => {
              if (pre.kind === "target" && !String(pre.token).toUpperCase().endsWith(".BNDDIR")) attachTarget(pre.token, "prerequisite of called program");
            });
          }
        });
        loaded.parsed.files.forEach((file) => {
          const match = findNamed(file.name);
          if (match && !seen.has(match.token.toUpperCase())) {
            seen.add(match.token.toUpperCase());
            reached.add(match.token.toUpperCase());
            rows.push([match.token, "declared in source", linkToken(match.token, areas.rel)]);
          }
        });
      }
      attached.set(item.option, rows);
      areas.doc.table(["Object", "Why it is in this option", "Page"], rows);
    });
  });
  const standalone = targets.filter((target) => !reached.has(target.token.toUpperCase()));
  areas.doc.h("Not reached from the menu");
  areas.doc.p("These active build targets were not reached by the menu rules above. They remain part of the application. Grouping them by name prefix would be a guess, so they are listed without a business label.");
  areas.doc.table(
    ["Object", "Type", "Source", "Page"],
    standalone.map((target) => [target.token, target.objectType, target.primarySource || "", linkToken(target.token, areas.rel)])
  );

  catalog.doc.p("Counts come from the inventory. Inactive rules and members with no build target are included.");
  catalog.doc.h("Counts by class");
  catalog.doc.table(["Class", "Files"], Object.keys(inventory.counts.byClass).sort().map((key) => [key, String(inventory.counts.byClass[key])]));
  catalog.doc.h("Counts by section");
  catalog.doc.table(["Section", "Files"], Object.keys(inventory.counts.bySection).sort().map((key) => [key, String(inventory.counts.bySection[key])]));
  catalog.doc.h("Active targets");
  catalog.doc.table(
    ["Object", "Type", "Language", "Source", "Page"],
    targets.map((target) => [target.objectName, target.objectType, target.language || "", target.primarySource || "", linkToken(target.token, catalog.rel)])
  );
  catalog.doc.h("No active build target");
  catalog.doc.table(
    ["Path", "Class", "Page"],
    filePages.map((file) => [file.path, file.class, linkPath(file.path, catalog.rel)])
  );

  dependencies.doc.h("Build edges");
  const buildRows = [];
  targets.forEach((target) => {
    (target.resolvedPrerequisites || []).forEach((item) => {
      buildRows.push([target.token, item.token, item.kind, item.path || ""]);
    });
  });
  dependencies.doc.table(["Target", "Prerequisite", "Kind", "Resolved path"], buildRows);
  dependencies.doc.h("Runtime calls");
  const callRows = [];
  const external = new Map();
  pages.forEach((page) => {
    const sourceRel = page.target ? page.target.primarySource : page.file.path;
    if (!sourceRel) return;
    const loaded = extractFile(sourceRel);
    if (!loaded.parsed) return;
    loaded.parsed.calls.forEach((call) => {
      const found = targets.some((target) => target.objectName.toUpperCase() === call.name.toUpperCase());
      callRows.push([sourceRel, call.name, call.kind, found ? "yes" : "no"]);
      if (!found) external.set(call.name.toUpperCase(), sourceRel);
    });
  });
  menuItems().forEach((item) => {
    const name = calledName(item.action);
    if (!name) return;
    const found = targets.some((target) => target.objectName.toUpperCase() === name.toUpperCase());
    callRows.push([menuFile(), name, "menu", found ? "yes" : "no"]);
    if (!found) external.set(name.toUpperCase(), menuFile());
  });
  dependencies.doc.table(["From", "To", "Mechanism", "Source in repository"], callRows);
  dependencies.doc.h("External names");
  dependencies.doc.p("These names are called and have no matching build target. Their behavior is " + UNKNOWN + ".");
  dependencies.doc.table(["Name", "Referenced from"], [...external.entries()].map((entry) => [entry[0], entry[1]]));
  const unresolved = inventory.findings.filter((item) => item.type === "unresolved-prerequisite");
  dependencies.doc.h("Unresolved build inputs");
  dependencies.doc.table(["Target", "Token", "Manifest"], unresolved.map((item) => [item.target, item.token, item.manifest]));

  globalization.doc.p("Compile CCSID comes from the nearest `.ibmi.json`. The root file supplies the default. A nearer file overrides it for that directory. A directory name is not treated as a language.");
  globalization.doc.h("CCSID files");
  globalization.doc.table(
    ["Directory", "tgtCcsid", "Source"],
    inventory.build.ccsid.map((row) => [row.directory, row.tgtCcsid == null ? UNKNOWN : String(row.tgtCcsid), row.source])
  );
  const rootCcsid = (inventory.build.ccsid.find((row) => row.directory === ".") || {}).tgtCcsid;
  globalization.doc.h("Files whose CCSID is not the root default");
  globalization.doc.table(
    ["Path", "tgtCcsid", "CCSID file"],
    files.filter((file) => file.ccsid && file.ccsid.tgtCcsid && String(file.ccsid.tgtCcsid) !== String(rootCcsid)).map((file) => [file.path, String(file.ccsid.tgtCcsid), file.ccsid.source])
  );
  globalization.doc.p("The national language of each CCSID value is " + globalization.doc.unknown("CCSID language names", "No repository file states which language a CCSID number represents.", "`.ibmi.json`") + ".");
  const badEncoding = files.filter((file) => file.encoding === "not-utf-8");
  globalization.doc.h("Not read as UTF-8");
  if (!badEncoding.length) globalization.doc.p("Every inventoried file was read as UTF-8 from the working tree. That is the editor encoding, not the IBM i compile CCSID.");
  else globalization.doc.table(["Path", "Encoding"], badEncoding.map((file) => [file.path, file.encoding]));

  questions.doc.p("Each row is a fact the repository does not establish, or a disagreement the inventory recorded. Nothing in this chapter is resolved by inference.");
  [readme, overview, build, areas, catalog, dependencies, globalization].forEach((item) => {
    item.doc.unknowns.forEach((unknown) => {
      allUnknowns.push({ page: item.rel, topic: unknown.topic, missing: unknown.missing, where: unknown.where });
    });
  });
  questions.doc.table(
    ["Page", "Topic", "What is missing", "Where"],
    allUnknowns.map((item) => [item.page, item.topic, item.missing, item.where])
  );

  trace.doc.p("Each object page lists the repository files read while writing it. A page with an empty source list is unfinished.");
  trace.doc.table(
    ["Page", "Sources read", "Open questions"],
    [...docs.entries()].map((entry) => [entry[0], [...entry[1].sources].join(", "), String(entry[1].unknowns.length)])
  );

  const chapters = [readme, overview, build, areas, catalog, dependencies, globalization, questions, trace];
  fs.mkdirSync(outRoot, { recursive: true });
  chapters.forEach((item) => {
    fs.mkdirSync(path.dirname(path.join(outRoot, item.rel)), { recursive: true });
    let body = item.doc.text();
    if (item.rel === "README.md") {
      const guidePath = path.join(outRoot, "_reader-guide.md");
      if (fs.existsSync(guidePath)) {
        const guide = fs.readFileSync(guidePath, "utf8").replace(/^\uFEFF/, "").trim();
        body = guide + "\n\n" + body.replace(/^# Application documentation\s*/, "");
      }
    }
    fs.writeFileSync(path.join(outRoot, item.rel), body, "utf8");
  });
  pages.forEach((page) => {
    const doc = docs.get(page.rel);
    const full = path.join(outRoot, page.rel);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, doc.text(), "utf8");
  });

  const missingTargets = targets.filter((target) => !pages.some((page) => page.target === target));
  console.log("pages: " + pages.length);
  console.log("chapters: " + chapters.length);
  console.log("missing targets: " + missingTargets.length);
  console.log("open questions: " + allUnknowns.length);
  if (missingTargets.length) process.exit(1);
}

main();
