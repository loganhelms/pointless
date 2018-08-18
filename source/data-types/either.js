const { isNil } = require('ramda')
const Left      = require('./left')
const Right     = require('./right')

class Either {
  constructor(value) {
    this.value = value
  }

  get value()               { return this.value       }
  static of(a)              { return Either.right(a)  }
  static left(a)            { return new Left(a)      }
  static right(a)           { return new Right(a)     }
  static fromNullable(val)  {
                              return isNil(val)
                                ? Either.left(val)
                                : Either.right(val)
                            }
}

module.exports = Either
