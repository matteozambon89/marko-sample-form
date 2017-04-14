/*
* @Author: Matteo Zambon
* @Date:   2017-02-14 23:21:33
* @Last Modified by:   Matteo Zambon
* @Last Modified time: 2017-04-08 00:44:18
*/

'use strict'

// Set isProduction flag
const isProduction = process.env.NODE_ENV === 'production'
// Set server port
const port = process.env.PORT || 8080
// Set server host
const host = process.env.HOST || '0.0.0.0'

// Allow ~ usage when requiring local files
require('require-self-ref')

// Install Marko for Node
require('marko/node-require').install()
// Enable res.marko
require('marko/express')

if(!isProduction) {
  // Enable Browser Refresh for Marko
  require('marko/browser-refresh').enable()
  // Enable Browser Refresh for Lasso
  require('lasso/browser-refresh').enable('*.marko *.css *.scss *.png *.jpeg *.jpg *.gif *.webp *.svg')
}

// Configure Lasso
require('lasso').configure({
  // Plugins
  'plugins': [
    // Allows Sass files to be rendered to CSS
    'lasso-sass',
    // Allows Marko templates to be compiled and transported to the browser
    'lasso-marko',
    // Allows Images
    'lasso-image',
    {
      'plugin': 'minprops/lasso',
      'enabled': isProduction
    }
  ],
   // Place all generated JS/CSS/etc. files into the "static" dir
  // 'outputDir': './static',
  // Only enable bundling in production
  'bundlingEnabled': isProduction,
  // Only minify JS and CSS code in production
  'minify': isProduction,
  // Only add fingerprints to URLs in production
  'fingerprintsEnabled': isProduction,
  // Group each dependencies in different bundles
  'bundles': [],
  // Lasso Output Directory
  'outputDir': './static'
})

// Get Express
const express = require('express')
// Initialize Express App
const app = express()

// Lasso Middleware to serve static content
app.use(require('lasso/middleware').serveStatic())

// Main rou
app.get('/', (req, res) => {
  const templatePath = '~/views/pages/form/index.marko'
  const template = require(templatePath)

  res.marko(template, {})
})

// Start listening on http://host:port
app.listen(port, host, () => {
  console.log('Server started! Try it out:\nhttp://' + host + ':' + port + '/')

  if(process.send) {
    process.send('online')
  }
})
