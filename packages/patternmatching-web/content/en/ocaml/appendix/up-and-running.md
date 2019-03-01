# Up and Running with OCaml

## OCaml

`ocaml --version` -> check OCaml version.

`ocaml` -> go into OCaml repl.

## opam (OCaml Package Manager)

`opam` -> package manager for OCaml.

### Installation on MacOS

Installation: `brew install opam`

## opam Functionalities

`opam install <some_package>` -> installing package from `opam`.

`opam switch create <ocaml_version>` -> make new OCaml version available in our machine.

`opam switch create <name> <ocaml_version>` -> make new OCaml version available in our machine, and tage it with name `name`.

`opam switch <ocaml_version>` -> "switch"/make opam use certain OCaml version.

`opam init` -> init ocaml project

`opam --version` -> check opam version

## merlin

`merlin` -> OCaml program that gives code completion for plugins

`opam install merlin` -> install merlin

## utop

`utop` -> REPL for OCaml

`ctrl+d` -> quit utop

## autoformat

`opam install ocp-indent`

`ocp-indent --version`

`ocp-indent hello.ml`

`ocp-indent hello.ml -i` -> i stand for in-place

## Running program

`ocamlopt hello.ml -o hello` -> compile `hello.ml` to hello