'use strict'
const fs = require('fs')
const glob = require('glob')
const NodeVersionAssets = require('node-version-assets')
const precache = require('sw-precache')
const uglifyjs = require('uglify-js')

function pwaPrepare (argv) {
	const output = argv[0] || 'dist'
	const swFile = `${output}/service-worker.js`

	glob(`${output}/**/*.{css,js}`, (error, assets) => {
		if (error) throw error

		glob(`${output}/**/*.html`, (error, grepFiles) => {
			if (error) throw error

			const nva = new NodeVersionAssets({
				assets,
				grepFiles
			})
			nva.run()

			const configPrecache = {
				staticFileGlobs: [`${output}/**/*.{html,js,css,png,jpg,jpeg,gif,svg,ico,eot,ttf,woff,woff2,txt,webapp,json}`],
				stripPrefix: output
			}
			precache.write(
				swFile,
				configPrecache,
				() => fs.writeFileSync(swFile, uglifyjs.minify(swFile).code)
			)

			grepFiles.map(html => {
				fs.readFile(html, 'utf-8', (error, data) => {
					if (error) throw error

					data = data.replace('</body>', `<script defer async src="service-worker.js"><script>if ('serviceWorker' in navigator && window.location.protocol === 'https:') navigator.serviceWorker.register('/service-worker.js')</script></body>`)
					fs.writeFile(html, data, (error, data) => !error ? console.log(`${html} was saved!`) : console.error(error))
				})
			})
		})
	})
}

module.exports = pwaPrepare
