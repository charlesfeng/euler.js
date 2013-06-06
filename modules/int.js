// int module (to parallel bigint)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the mit license (http://www.opensource.org/licenses/mit)

var I = function (n) {
  if (n.isInt) this.n = n.n
  else this.n = n
}

I.prototype = {
    isInt: true
  
  // display
  , toString: function () {
      return this.n.toString()
    }
  , toKey: function () {
      return this.n
    }
  , toNumber: function () {
      return this.n
    }
    
  // comparison
  , gt: function (that) {
      return this.n > that.n
    }
  , gte: function (that) {
      return this.n >= that.n
    }
  , lt: function (that) {
      return this.n < that.n
    }
  , lte: function (that) {
      return this.n <= that.n
    }
  , eq: function (that) {
      return this.n === that.n
    }
  , ne: function (that) {
      return this.n !== that.n
    }
  
  // arithmetic
  , add: function (n) {
      return new I(this.n + (typeof n === 'number' ? n : parseInt(n, 10)))
    }
  , sub: function (n) {
      return new I(this.n - n)
    }
  , mul: function (n) {
      return new I(this.n * n)
    }
    
  // other operators
  , neg: function () {
      return new I(-this.n)
    }
  , abs: function () {
      return new I(Math.abs(this.n))
    }
  , pow: function (n) {
      return new I(Math.pow(this.n, n))
    }
}

module.exports = I