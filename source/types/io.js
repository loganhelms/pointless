const isFunction = require('./isFunction')

class IO {
  constructor(effect) {
    if (isFunction(effect)) throw 'IO Usage: function required'
    this.effect = effect
  }

  static of(a)    { return new IO(() => a)    }
  static from(fn) { return new IO(fn)         }

  run()           { return this.effect()      }
  chain(fn)       { return fn(this.effect())  }
  map(fn)         {
                    let self = this
                    return new IO(() => fn(self.effect()))
                  }
}

module.exports = IO