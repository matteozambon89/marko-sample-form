/*
* @Author: Matteo Zambon
* @Date:   2017-03-16 18:44:00
* @Last Modified by:   Matteo Zambon
* @Last Modified time: 2017-04-03 21:57:10
*/

'use strict'

// Polyfill to support native ES6 promises
const App = require('./App')

module.exports = window.app = new App()
