'use strict'
const message = `
$ pwa-prepare --help

  Usage:

    $ pwa-prepare [<output>] [<options>]

  Options:

    -h, --help              Display help information
    -v, --version           Output version

  Examples:

    $ pwa-prepare
    $ pwa-prepare dist
`

function help () {
	console.log(message)
	process.exit(1)
}

module.exports = help
