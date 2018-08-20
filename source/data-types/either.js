const { isNil } = require('ramda')

class Either {
  constructor(value) {
    this._value = value
  }

  get value()               { return this._value      }
  static of(a)              { return Either.right(a)  }
  static left(a)            { return new Left(a)      }
  static right(a)           { return new Right(a)     }
  static fromNullable(val)  {
                              return isNil(val)
                                ? Either.left(val)
                                : Either.right(val)
                            }
}

class Left extends Either {
  get value() { throw new TypeError('Cannot extract the value of a Left(a).') }

  map(_)            { return this                           } // noop
  getOrElse(other)  { return other                          }
  orElse(f)         { return f(this._value)                 }
  chain(f)          { return this                           }
  getOrElseThrow(a) { throw new Error(a)                    }
  filter(f)         { return this                           }
  toString()        { return `Either.Left(${this._value})`  }
}

class Right extends Either {
  orElse()          { return this                           }
  getOrElse(other)  { return this._value                    }
  getOrElseThrow(_) { return this._value                    }
  chain(f)          { return f(this._value)                 }
  map(f)            { return Either.of(f(this._value))      }
  filter(f)         {
                      return Either.fromNullable(f(this._value)
                      ? this._value
                      : null)
                    }
  toString()        { return `Either.Right(${this._value})` }
}

module.exports = Either
