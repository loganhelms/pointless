const Maybe = require('./maybe')

class Nothing extends Maybe {
  get value()       { throw new TypeError('Cannot extract the value of a Nothing.') }
  getOrElse(other)  { return other                                                  }
  chain(f)          { return this                                                   }
  map(f)            { return this                                                   }
  filter(f)         { return this.value                                             }
  toString()        { return `Maybe.Nothing`                                        }
}

module.exports = Nothing