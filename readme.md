# PWA Prepare

> Prepare your application for PWA features

[![Travis Status](https://travis-ci.org/cjpatoilo/pwa-prepare.svg?branch=master)](https://travis-ci.org/cjpatoilo/pwa-prepare?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/cw249ount3qs2hou?svg=true)](https://ci.appveyor.com/project/cjpatoilo/pwa-prepare)
[![Codacy Status](https://img.shields.io/codacy/grade/e9961d836078409c910329b9ac337994/master.svg)](https://www.codacy.com/app/cjpatoilo/pwa-prepare/dashboard)
[![Dependencies Status](https://david-dm.org/cjpatoilo/pwa-prepare.svg)](https://david-dm.org/cjpatoilo/pwa-prepare)
[![Version Status](https://badge.fury.io/js/pwa-prepare.svg)](https://www.npmjs.com/package/pwa-prepare)
[![Download Status](https://img.shields.io/npm/dt/pwa-prepare.svg)](https://www.npmjs.com/package/pwa-prepare)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/cjpatoilo/pwa-prepare)


## Why it's awesome?

This library reads the files that will be published, adds hashes to the files, generates the cache of your files (service worker).


## Getting Started

**Install with npm**

```
$ npm install -g pwa-prepare
```

*NOTE: Install this npm package with `-g` to global use or with `-D` to add the package as a devDependency in the `package.json` file of your project.*

**Install with Yarn**

```
$ yarn add pwa-prepare
```


**Usage**

```
$ pwa-prepare dist
```

NOTE: `dist` is output by default when output is undefined


## CLI

```
$ pwa-prepare --help

  Usage:

    $ pwa-prepare [<output>] [<options>]

  Options:

    -h, --help              Display help information
    -v, --version           Output version

  Examples:

    $ pwa-prepare
    $ pwa-prepare dist
```


## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/pwa-prepare/blob/master/.github/contributing.md).


## License

Designed with ♥ by [CJ Patoilo](http://twitter.com/cjpatoilo). Licensed under the [MIT License](http://cjpatoilo.mit-license.org).
