'use strict'
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const NodeVersionAssets = require('node-version-assets')
const precache = require('sw-precache')

module.exports = argv => {
  const output = path.dirname(argv[0]) || 'dist'
  const swFile = `${output}/service-worker.js`
  const htmlFile =
    path.extname(argv[0]) === '.html' ? path.basename(argv[0]) : '**/*.html'

  glob(`${output}/**/*.{css,js}`, (error, assets) => {
    if (error) throw error

    glob(`${output}/${htmlFile}`, (error, grepFiles) => {
      if (error) throw error

      grepFiles.map(htmlFile => {
        fs.readFile(htmlFile, 'utf-8', (error, data) => {
          if (error) throw error

          data = data.replace(
            '</body>',
            '<script src="service-worker.js"></script><script>if ("serviceWorker" in navigator && window.location.protocol === "https:") navigator.serviceWorker.register("/service-worker.js")</script></body>',
          )
          fs.writeFile(htmlFile, data, (error, data) =>
            !error
              ? console.log(`${htmlFile} was saved!`)
              : console.error(error),
          )
        })
      })

      const nva = new NodeVersionAssets({
        assets,
        grepFiles,
      })
      nva.run()

      precache.write(swFile, {
        staticFileGlobs: [
          `${output}/**/*.{html,js,css,png,jpg,jpeg,gif,svg,ico,eot,ttf,woff,woff2,txt,webapp,json}`,
        ],
        stripPrefix: output,
      })
    })
  })
}
