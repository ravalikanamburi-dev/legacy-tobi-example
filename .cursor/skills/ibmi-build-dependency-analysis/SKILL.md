---
name: ibmi-build-dependency-analysis
description: >-
  Traces build and runtime dependencies across make manifests, binding
  directories, binder source, ILE program scripts, service programs,
  triggers, include paths, tests, and CCSID settings in an IBM i repository.
  Use when documenting architecture, call graphs, build order, globalization,
  or test coverage for an application documentation package.
---

# Build and dependency analysis

Use this skill for the build, dependency, globalization, service-program, binding-directory, and trigger chapters. Read [reference.md](reference.md).

## Procedure

1. Start from the inventory manifests, target graph, CCSID rows, actions, and findings. Do not rebuild that list by hand.
2. On each service program, read the binder listing and the create script if either exists. List exports, signature, modules, activation group, and bound service programs.
3. Compare those exports with prototypes and with procedure exports. Record missing and extra names.
4. Compare binding-directory entries with the build prerequisites of that directory. Record entries that appear on only one side.
5. For triggers, record the file, time, event, program, and trigger name from the source.
6. Resolve copy and include names. Unresolved names are external or missing.
7. Treat a test as evidence of expected behavior only for the assertions it contains.

## Build facts versus runtime facts

A manifest prerequisite is a build dependency. A call is a runtime dependency. List them in different columns. A custom recipe is quoted. If a recipe prefix is not defined in the repository or its build skill, quote it and mark the prefix unknown.

## Outside the default build

A manifest that the inventory marks `manifest-not-reachable` still has objects. Document them and state that the root subdirectory list does not include that directory. Do not add the directory to the build as part of documentation.

## Same object name, two sources

If a binder listing and a create-service-program script share an object name, document both and say which one is the target's primary source.
