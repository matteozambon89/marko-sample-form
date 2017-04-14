/*
* @Author: Matteo Zambon
* @Date:   2017-04-08 00:29:04
* @Last Modified by:   Matteo Zambon
* @Last Modified time: 2017-04-10 18:58:39
*/

'use strict'

const markoFormHelper = require('marko-form/helper')

module.exports = {
  onCreate(input) {
    this.state = input
    this.state.debug = true

    this.state.formName = 'inputForm'

    this.state.inputTextName = 'inputText'
    this.state.inputTextValue = ''
    this.state.inputTextValidation = [
      {
        'fn': 'isLength',
        'attrs': {
          'min': 2
        }
      }
    ]
    this.state.inputTextMessage = 'Text is not 2 characters long'
    this.state.inputTextHasSuccess = false
    this.state.inputTextHasDanger = false
    this.state.inputTextIsPristine = 'n.d.'
    this.state.inputTextIsDirty = 'n.d.'
    this.state.inputTextIsValid = 'n.d.'
    this.state.inputTextDuring = 'n.d.'

    this.state.inputEmailName = 'inputEmail'
    this.state.inputEmailValue = ''
    this.state.inputEmailValidation = [
      {
        'fn': 'isEmail',
        'attrs': {}
      }
    ]
    this.state.inputEmailMessage = 'Text must be an email'
    this.state.inputEmailHasSuccess = false
    this.state.inputEmailHasDanger = false
    this.state.inputEmailIsPristine = 'n.d.'
    this.state.inputEmailIsDirty = 'n.d.'
    this.state.inputEmailIsValid = 'n.d.'
    this.state.inputEmailDuring = 'n.d.'
  },
  onMount() {
    markoFormHelper.debug = true

    const inputTextEvent = [
      this.state.formName,
      this.state.inputTextName,
      'change'
    ].join('.')

    this.subscribeTo(markoFormHelper).on(inputTextEvent, (e) => {
      console.log(inputTextEvent)
      console.log(e)
      this.state.inputTextValue = e.currentValue
      this.state.inputTextHasSuccess = (!e.pristine && e.valid)
      this.state.inputTextHasDanger = (!e.pristine && !e.valid)
      this.state.inputTextIsPristine = e.pristine ? 'yes' : 'no'
      this.state.inputTextIsDirty = e.dirty ? 'yes' : 'no'
      this.state.inputTextIsValid = e.valid ? 'yes' : 'no'
      this.state.inputTextDuring = e.during
    })

    const inputEmailEvent = [
      this.state.formName,
      this.state.inputEmailName,
      'change'
    ].join('.')

    this.subscribeTo(markoFormHelper).on(inputEmailEvent, (e) => {
      console.log(inputEmailEvent)
      console.log(e)
      this.state.inputEmailValue = e.currentValue
      this.state.inputEmailHasSuccess = (!e.pristine && e.valid)
      this.state.inputEmailHasDanger = (!e.pristine && !e.valid)
      this.state.inputEmailIsPristine = e.pristine ? 'yes' : 'no'
      this.state.inputEmailIsDirty = e.dirty ? 'yes' : 'no'
      this.state.inputEmailIsValid = e.valid ? 'yes' : 'no'
      this.state.inputEmailDuring = e.during
    })
  }
}
