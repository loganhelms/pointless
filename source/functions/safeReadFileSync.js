const fs        = require('fs')
const { curry } = require('ramda')
const Either    = require('../types/either')

/**
 * Reads contents from a file
 *
 * @sig s -> s -> {Either}
 * @param {String} encoding The encoding
 * @param {String} filename The filename including extention
 * @return {Either} Results of read
 */
const safeReadFileSync = curry((encoding, filename) => {
  try {
    return Either.fromNullable(fs.readFileSync(`${__dirname}/${filename}`, encoding))
  } catch (error) {
    return Either.left(`${error.name}: ${error.message}`)
  }
})

module.exports = safeReadFileSync
