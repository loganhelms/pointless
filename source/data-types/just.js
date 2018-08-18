const Maybe = require('./maybe')

class Just extends Maybe {
  constructor(value) {
    super()
    this.value = value
  }

  get value() { return this.value                         }
  getOrElse() { return this.value                         }
  chain(f)    { return f(this.value)                      }
  map(f)      { return Maybe.fromNullable(f(this.value))  }
  filter(f)   {
                Maybe.fromNullable(f(this.value)
                ? this.value
                : null)
              }
  toString()  { return `Maybe.Just(${this.value})`        }
}

module.exports = Just
