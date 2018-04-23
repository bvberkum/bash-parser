# bash-parser

Parses bash source code to produce an AST

[![Travis Build Status](https://img.shields.io/travis/bvberkum/bash-parser/master.svg)](http://travis-ci.org/bvberkum/bash-parser)
[![Coveralls](https://img.shields.io/coveralls/bvberkum/bash-parser.svg?maxAge=2592000)](https://coveralls.io/github/bvberkum/bash-parser)

# Installation

```bash
npm install --save bash-parser
```

# Usage

```js
  const parse = require('bash-parser');
  const ast = parse('echo ciao');
```

`ast` result is:

```js
{
		type: "Script",
		commands: [
			{
				type: "SimpleCommand",
				name: {
					text: "echo",
					type: "Word"
				},
				suffix: [
					{
						text: "ciao",
						type: "Word"
					}
				]
			}
		]
	}
```

# Related projects

* [cash](https://github.com/dthree/cash) - This parser should become the parser used by `cash` (and also [vorpal](https://github.com/dthree/vorpal))
* [nsh](https://github.com/piranna/nsh) - This parser should become the parser used by `nsh`
* [js-shell-parse](https://github.com/grncdr/js-shell-parse) - bash-parser was born as a fork of `js-shell-parse`, but was rewritten to use a `jison` grammar
* [jison](https://github.com/zaach/jison) - Bison in JavaScript.

# Documentation

Look in [documents folder](https://github.com/bvberkum/bash-parser/tree/master/documents)

# License

The MIT License (MIT)

Copyright (c) 2016 vorpaljs
