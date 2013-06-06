// bigint module

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the mit license (http://www.opensource.org/licenses/mit)

var B = function (n, p) {
  if (!n) n = 0
  if (typeof n === 'number') n = '' + n
  
  if (n.isBigInt) {
    this.p = n.p
    this.n = n.n.slice(0)
  
  } else if (typeof n === 'string') {
    this.p = n.slice(0, 1) !== '-' || !(n = n.slice(1))
    this.n = n.split('').reverse().map(function (a) { return parseInt(a, 10) })
  
  } else if (Array.isArray(n)) {
    this.p = typeof p !== 'undefined' ? p : true
    this.n = n.slice(0)
  
  } else {
    throw 'invalid input'
  }
}

B.prototype = {
    isBigInt: true
  
  // display
  , toString: function () {
      return (this.p ? '' : '-') + this.n.slice(0).reverse().join('')
    }
  , toKey: function () {
      return (this.p ? '' : '-') + this.n.slice(0).reverse().join('')
    }
  , toNumber: function () {
      return parseInt((this.p ? '' : '-') + this.n.slice(0).reverse().join(''), 10)
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
  
  // normalize
  , norm: function () {
      for (var c = 0, i = 0; i < this.n.length; i++) {
        this.n[i] += c
        
        if (this.n[i] > 10) {
          c = Math.floor(this.n[i] / 10)
          this.n[i] %= 10
        
        } else if (this.n[i] < 0) {
          c = Math.floor(this.n[i] / 10)
          this.n[i] -= 10 * c
        
        } else {
          c = 0
        }
      }
      
      if (c) {
        if (c > 0) {
          this.n = this.n.concat(('' + c).split('').reverse().map(function (a) { return parseInt(a, 10) }))
        
        } else {
          this.n = new B('' + (-c) + Array(this.n.length + 1).join('0')).sub(new B(this.n)).n.slice(0)
          this.p = !this.p
        }
      }
      
      while (this.n.length > 1 && this.n.slice(-1)[0] === 0) {
        this.n.splice(-1)
      }
      
      return this
    }
  
  // arithmetic
  , add: function (n) {
      if (typeof n === 'number' && this.p === !(n > 0)) n = -n
      if (typeof n !== 'number' && this.p !== n.p) return this.sub(new B(n).neg())
      
      return _as(new B(this), n, function (a, b) { return a + b })
    }
  , sub: function (n) {
      if (typeof n === 'number' && this.p === !(n > 0)) n = -n
      if (typeof n !== 'number' && this.p !== n.p) return this.add(new B(n).neg())
      
      return _as(new B(this), n, function (a, b) { return a - b })
    }
  , mul: function (n) {
      var self = this
        , r = new B(self)
      
      if (typeof n === 'number') {
        for (var i = 0; i < r.n.length; i++) {
          r.n[i] *= n
        }
        
      } else {
        if (!n.isBigInt) n = new B(n)
        
        r.n = _m(r.n.slice(0), n.n.slice(0))
        r.p = (r.p === n.p)
      }
      
      return r.norm()
    }
  
  // other operators
  , neg: function () {
      return new B(this.n, !this.p)
    }
  , abs: function () {
      return new B(this.n, true)
    }
  , pow: function (n) {
      var t = new B(this)
      
      for (var i = 0; i < n - 1; i++) {
        t = t.mul(this)
      }
      
      return t
    }
}

// makes an array of length l, filled with a
var _rpt = function (a, l) {
  return Array(l + 1).join('a').split('').map(function () { return a })
}

// helper function for comparison operators
var _gt = function (a, b, equal) {
  if (a.n.length > b.n.length) {
    return true
  
  } else if (a.n.length < b.n.length) {
    return false
  
  } else {
    for (var i = a.n.length; i--; ) {
      if (a.n[i] > b.n[i]) return true
      if (a.n[i] < b.n[i]) return false
    }
    return equal
  }
}

// helper function for addition/subtraction operators
var _as = function (r, n, pm) {
  if (typeof n === 'number') {
    r.n[0] = pm(r.n[0], n)
  
  } else {
    if (!n.isBigInt) n = new B(n)
    
    n.n.forEach(function (n, i) {
      r.n[i] = pm(r.n[i] || 0, n)
    })
  }
  
  return r.norm()
}

// helper function for multiplication operator
var _m = function (n1, n2) {
  if (n1.length > n2.length) n2 = n2.concat(_rpt(0, n1.length - n2.length))
  else if (n2.length > n1.length) n1 = n1.concat(_rpt(0, n2.length - n1.length))
  
  var k = Math.floor(n1.length / 2)
  
  if (k === 0) return [n1[0] * n2[0]]
  if (n1.every(function (a) { return !a }) || n2.every(function (a) { return !a })) return [0]
  
  var z0 = new B(_m(n1.slice(0, k), n2.slice(0, k)))
    , z2 = new B(_m(n1.slice(k), n2.slice(k)))
    , z1 = new B(_m(new B(n1.slice(0, k)).add(n1.slice(k)).n, new B(n2.slice(0, k)).add(n2.slice(k)).n)).sub(z0).sub(z2)
  
  z1.n = _rpt(0, k).concat(z1.n)
  z2.n = _rpt(0, 2 * k).concat(z2.n)
  
  return z0.add(z1).add(z2).n
}

module.exports = B