// prime factorization module

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the MIT license (http://www.opensource.org/licenses/MIT)

module.exports = function (n, ps) {
  if (n === 1) return { 1: 1 }
  if (ps === true) ps = require('./primes')(Math.floor(Math.sqrt(n))).ps
    
  var pf = {}
  
  // method 1: iterate through prime numbers
  if (ps) {
    var f = []
      , t = n
      , j = 0
    
    while (t > 1 && ps[j] <= Math.sqrt(t)) {
      if (t % ps[j]) j++
      else {
        t /= ps[j]
        f[j] = (f[j] || 0) + 1
        j = 0
      }
    }
    
    f.forEach(function (c, i) {
      pf[ps[i]] = c
    })

    if (t > 1) pf[t] = 1
  
  // method 2: iterate through integers
  } else {
    var p = 2
      , f = {}

    while (p < n) {
      if (n % p) {
        p++
      } else {
        pf[p] = (pf[p] || 0) + 1
        n /= p
        p = 2
      }
    }
    
    if (p > 1) pf[p] = (pf[p] || 0) + 1
  }
  
  return pf
}

// finds the prime factorization of a number using one of two methods
//
// parameters:
//   n - the number
//   ps (optional) - an array of prime numbers, or true to signal that we should use prime numbers
//
// returns: the pf as an object of { prime1: number1, ... }