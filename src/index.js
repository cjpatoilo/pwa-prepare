'use strict'
const glob = require('glob')
const nva = require('node-version-assets')
const precache = require('sw-precache')

function pwaPrepare (argv) {
	const output = argv[0] || 'dist'

	glob(`${output}/**/*.{css,js}`, (error, assets) => glob(`${output}/**/*.html`, (error, grepFiles) => {
		const nvaInstance = new nva({ assets, grepFiles })
		nvaInstance.run()

		precache.write(`${output}/service-worker.js`, {
			staticFileGlobs: [
				`${output}/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,txt,webapp,json}`
			],
			stripPrefix: output
		})
	}))
}

module.exports = pwaPrepare
