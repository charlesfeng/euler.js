// bigint class

var BigInt = function (n) {
  if (!n) n = 0
  if (typeof n === 'number') n = '' + n
  if (typeof n === 'string') n = n.split('').slice(0).reverse()
  if (n.isBigInt) n = n.toArray()
  
  this.n = n.map(function (a) { return parseInt(a, 10) })
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
  , toNumber: function () {
      return parseInt(this.n.slice(0).reverse().join(''), 10)
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
      var self = this
      
      if (typeof n === 'number') {
        self.n[0] += n
      
      } else {
        if (!n.isBigInt) n = new BigInt(n)
        
        n.toArray().forEach(function (n, i) {
          self.n[i] = (self.n[i] || 0) + n
        })
      }
      
      return self.carry()
    }
  , multiply: function (n) {
      var self = this
        , t = new BigInt(self)
      
      if (typeof n === 'number') {
        for (var i = 0; i < this.n.length; i++) this.n[i] *= n
          
      } else {
        if (!n.isBigInt) n = new BigInt(n)
        
        n.toArray().forEach(function (n, i) {
          if (i === 0) return self.multiply(n)
          
          for (var s = new BigInt(t), j = 0; j < i; j++)
            s.n.unshift(0)
          
          self.add(s.multiply(n))
        })
      }
      
      return self.carry()
    }
    
  // other operators
  , pow: function (n) {
      var t = new BigInt(this)
      
      for (var i = 0; i < n - 1; i++)
        this.multiply(t)
      
      return this
    }
}

module.exports = BigInt