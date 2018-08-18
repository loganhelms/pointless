const { isNil } = require('ramda')
const Just      = require('./just')
const Nothing   = require('./nothing')

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

module.exports = Maybe
