./*
* @Author: Matteo Zambon
* @Date:   2017-03-16 18:17:10
* @Last Modified by:   Matteo Zambon
* @Last Modified time: 2017-04-06 07:28:56
*/

'use strict'

const EventEmitter = require('events')

class App extends EventEmitter {
  constructor() {
    super()
  }

  _emitChange() {
    this.emit('change', {})
  }
}

module.exports = App
