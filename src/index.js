'use strict'
const fs = require('fs')
const glob = require('glob')
const NodeVersionAssets = require('node-version-assets')
const precache = require('sw-precache')
const uglifyjs = require('uglify-js')

function pwaPrepare (argv) {
	const output = argv[0] || 'dist'

	glob(`${output}/**/*.{css,js}`, (error, assets) => {
		if (error) throw error

		glob(`${output}/**/*.html`, (error, grepFiles) => {
			if (error) throw error
			const nva = new NodeVersionAssets({
				assets,
				grepFiles
			})
			nva.run()

			precache.write(`${output}/service-worker.js`, {
				staticFileGlobs: [
					`${output}/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,txt,webapp,json}`
				],
				stripPrefix: output
			}, () => {
				const file = uglifyjs.minify(`${output}/service-worker.js`).code
				fs.writeFileSync(`${output}/service-worker.js`, file)
			})
		})
	})
}

module.exports = pwaPrepare
