'use strict'
const path = require('path')

const logger = require('../logger')

exports.uploadImage = function (imagePath, callback) {
  if (!imagePath || typeof imagePath !== 'string') {
    callback(new Error('Image path is missing or wrong'), null)
    return
  }

  if (!callback || typeof callback !== 'function') {
    logger.error('Callback has to be a function')
    return
  }

  const url = '@attachment/' + path.basename(imagePath)
  callback(null, url)
}
