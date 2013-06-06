// finds the largest power of a base less than a number

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the mit license (http://www.opensource.org/licenses/mit)

module.exports = function (n, b) {
  var B = require('./' + (typeof n === 'number' && typeof b === 'number' ? '' : 'big') + 'int')
    , ps, p, v
  
  n = new B(n)
  b = new B(b)
  
  ps = {}
  p = new B(1)
  v = new B(b)
  
  while (v.lte(n)) {
    ps[p.toKey()] = new B(v)
    v = v.pow(2)
    p = p.mul(2)
  }
  
  p = new B(0)
  v = new B(1)
  
  Object.keys(ps).reverse().forEach(function (c) {
    if (v.mul(ps[c]).lte(n)) {
      p = p.add(c)
      v = v.mul(ps[c])
    }
  })
  
  return {
      p: p.toKey()
    , v: v.toKey()
  }
}

// parameters:
//   n - the number (as a number, string, or BigInt)
//   b - the base (as a number, string, or BigInt)
//
// returns:
//   p - exponent of the largest power, formatted as a number or a string
//   v - value of the largest power, formatted as a number or a string