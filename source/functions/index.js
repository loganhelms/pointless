'use strict'

const freezeDeep        = require('./freezeDeep')
const safeParseJson     = require('./safeParseJson')
const safeReadFileSync  = require('./safeReadFileSync')
const writeFileSync     = require('./writeFileSync')

module.exports = {
  freezeDeep,
  safeParseJson,
  safeReadFileSync,
  writeFileSync,
}
