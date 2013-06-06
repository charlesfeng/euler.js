// bigint module

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the mit license (http://www.opensource.org/licenses/mit)

var BigInt = function (n) {
  if (!n) n = 0
  if (typeof n === 'number') n = '' + n
  if (typeof n === 'string') n = n.split('').slice(0).reverse()
  if (n.isBigInt) n = n.toArray()
  
  this.n = n.map(function (a) { return parseInt(a, 10) })
}

var _gt = function (a, b, equal) {
  if (a.n.length > b.n.length) return true
  else if (a.n.length < b.n.length) return false
  else {
    for (var i = a.n.length; i--; ) {
      if (a.n[i] > b.n[i]) return true
      if (a.n[i] < b.n[i]) return false
    }
    return equal
  }
}

BigInt.prototype = {
    isBigInt: true
    
  // display
  , toArray: function () {
      return this.n.slice(0)
    }
  , toString: function () {
      return this.n.slice(0).reverse().join('')
    }
  , toKey: function () {
      return this.n.slice(0).reverse().join('')
    }
  , toNumber: function () {
      return parseInt(this.n.slice(0).reverse().join(''), 10)
    }
    
  // comparison
  , gt: function (that) {
      return _gt(this, that, false)
    }
  , gte: function (that) {
      return _gt(this, that, true)
    }
  , lt: function (that) {
      return _gt(that, this, false)
    }
  , lte: function (that) {
      return _gt(that, this, true)
    }
  , eq: function (that) {
      return _gt(this, that, -1) === -1
    }
  , ne: function (that) {
      return _gt(this, that, -1) !== -1
    }
    
  // carry
  , carry: function () {
      for (var c = 0, i = 0; i < this.n.length; i++) {
        this.n[i] += c
        c = Math.floor(this.n[i] / 10)
        this.n[i] %= 10
      }
      
      if (c) this.n = this.n.concat(('' + c).split('').reverse().map(function (a) { return parseInt(a, 10) }))
      
      return this
    }
  
  // arithmetic
  , add: function (n) {
      var r = new BigInt(this)
      
      if (typeof n === 'number') {
        r.n[0] += n
      
      } else {
        if (!n.isBigInt) n = new BigInt(n)
        
        n.toArray().forEach(function (n, i) {
          r.n[i] = (r.n[i] || 0) + n
        })
      }
      
      return r.carry()
    }
  , multiply: function (n) {
      var self = this
        , r = new BigInt(self)
      
      if (typeof n === 'number') {
        for (var i = 0; i < r.n.length; i++) r.n[i] *= n
          
      } else {
        if (!n.isBigInt) n = new BigInt(n)
        
        n.toArray().forEach(function (n, i) {
          if (i === 0) return r = r.multiply(n)
          
          for (var s = new BigInt(self), j = 0; j < i; j++)
            s.n.unshift(0)
          
          r = r.add(s.multiply(n))
        })
      }
      
      return r.carry()
    }
    
  // other operators
  , pow: function (n) {
      var t = new BigInt(this)
      
      for (var i = 0; i < n - 1; i++)
        t = t.multiply(this)
      
      return t
    }
}

module.exports = BigInt