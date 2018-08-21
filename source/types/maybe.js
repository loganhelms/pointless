const { isNil } = require('ramda')

class Maybe {
  get isNothing()         { return false          }
  get isJust()            { return false          }

  static just(a)          { return new Just(a)    }
  static nothing()        { return new Nothing()  }
  static of(a)            { return this.just(a)   }
  static fromNullable(a)  {
                            return isNil(a)
                              ? Maybe.nothing()
                              : Maybe.just(a)
                          }
}

class Just extends Maybe {
  constructor(value) {
    super()
    this._value = value
  }

  get value() { return this._value                        }
  getOrElse() { return this._value                        }
  chain(f)    { return f(this._value)                     }
  map(f)      { return Maybe.fromNullable(f(this._value)) }
  filter(f)   {
                Maybe.fromNullable(f(this._value)
                ? this._value
                : null)
              }
  toString()  { return `Maybe.Just(${this._value})`       }
}

class Nothing extends Maybe {
  get value()       { throw new TypeError('Cannot extract the value of a Nothing.') }
  getOrElse(other)  { return other                                                  }
  chain(f)          { return this                                                   }
  map(f)            { return this                                                   }
  filter(f)         { return this._value                                            }
  toString()        { return `Maybe.Nothing`                                        }
}

module.exports = Maybe
