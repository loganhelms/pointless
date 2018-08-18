const Either = require('either')

class Right extends Either {
  orElse()          { return this                           }
  getOrElse(other)  { return this.value                     }
  getOrElseThrow(_) { return this.value                     }
  chain(f)          { return f(this.value)                  }
  map(f)            { return Either.of(f(this.value))       }
  filter(f)         {
                      return Either.fromNullable(f(this.value)
                      ? this.value
                      : null)
                    }
  toString()        { return `Either.Right(${this.value})`  }
}