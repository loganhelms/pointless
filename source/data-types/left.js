const Either = require('either')

class Left extends Either {
  get value() { throw new TypeError('Cannot extract the value of a Left(a).') }

  map(_)            { return this                         } // noop
  getOrElse(other)  { return other                        }
  orElse(f)         { return f(this.value)                }
  chain(f)          { return this                         }
  getOrElseThrow(a) { throw new Error(a)                  }
  filter(f)         { return this                         }
  toString()        { return `Either.Left(${this.value})` }
}