const fs        = require('fs')
const { curry } = require('ramda')

/**
 *
 * Reads the contents of a file.
 *
 * @func
 * @memberOf Purity
 * @since v1.0.0
 * @category IO
 * @sig s -> s -> s
 * @param {String} encoding The content encoding, defaults to UTF-8
 * @param {String} filename The file name
 * @return {String} The file contents
 * @example
 *
 *    const readBase64FileSync  = readFileSync('base64')
 *    const contents            = readBase64FileSync('myfile.txt')
 */

const readFileSync =
  curry((encoding, filename) =>
    fs.readFileSync(`${__dirname}/${filename}`, encoding))

module.exports = readFileSync

console.log(readFileSync('utf8')('myfile.txt'))