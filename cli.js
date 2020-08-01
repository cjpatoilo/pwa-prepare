#!/usr/bin/env node
'use strict'
const pkg = require('../package.json')
const app = require('.')
const argv = process.argv.slice(2)

if (argv.indexOf('--version') !== -1 || argv.indexOf('-v') !== -1) {
  console.log(pkg.version)
  process.exit(1)
}

if (argv.indexOf('--help') !== -1 || argv.indexOf('-h') !== -1) {
  console.log(`
    Usage:

      $ pwa-prepare [<output>] [<options>]

    Options:

      -h, --help              Display help information
      -v, --version           Output version

    Examples:

      $ pwa-prepare
      $ pwa-prepare dist
  `)
  process.exit(1)
}
app(argv)
