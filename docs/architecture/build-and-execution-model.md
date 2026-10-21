# Build and execution model

`iproj.json` stores `buildCommand` `/QOpenSys/pkgs/bin/makei build`. Root `Rules.mk` lists the directories that a default build visits. `QTRGSRC/Rules.mk` exists and is not in that list. Status: Confirmed from the two files.

`.vscode/actions.json` runs `makei build` and `makei compile` with `lib1=&CURLIB`. A second pair of actions points at `../ibmi-tobi/bin/makei`. That sibling path is not in this checkout. Status: External Dependency.

Execution of a menu option is the action string in the menu source. Job descriptions, schedules, and user profiles are Unresolved. None are defined in this checkout.
