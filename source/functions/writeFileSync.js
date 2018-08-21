const fs        = require('fs')
const { curry } = require('ramda')
const IO        = require('../types/io')

/**
 * Writes data to a file
 *
 * @sig s -> s -> {*} -> {IO}
 * @param {String} encoding The encoding
 * @param {String} filename The filename
 * @param {*} data The data to be written to file
 * @return {IO}
 */
const writeFileSync = curry((encoding, filename, data) =>
    IO.of(fs.writeFileSync(`${__dirname}/${filename}`, data, encoding)))

module.exports = writeFileSync
