const { forEach, is, not }  = require('ramda')
const isFrozen              = require('../predicates/isFrozen')
const keys                  = require('./keys')

const freezeDeep = obj => {
  if (is(Object, obj) && not(isFrozen(obj))) {
    forEach(key => freezeDeep(obj[key]), keys(obj))
    Object.freeze(obj)
  }
  return obj
}

module.exports = freezeDeep
