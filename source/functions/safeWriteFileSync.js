const fs        = require('fs')
const { curry } = require('ramda')

const writeFileSync =
  curry((encoding, filename, data) =>
    fs.writeFileSync(`${__dirname}/${filename}`, data, encoding))

module.exports = writeFileSync
