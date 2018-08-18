const fs        = require('fs')
const { curry } = require('ramda')

const readFileSync =
  curry((encoding, filename) =>
    fs.readFileSync(`${__dirname}/${filename}`, encoding))

module.exports = readFileSync

console.log(readFileSync('utf8')('myfile.txt'))