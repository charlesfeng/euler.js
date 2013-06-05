// finds the prime factorization of a number
//
// parameters:
//   n - the number
//   p (optional) - an array s.t. p[n] tells us if n is prime
//   ps (optional) - an array of prime numbers
//
// returns: the pf as an object of { prime1: number1, ... }

module.exports = function (n, ps) {
  if (n === 1) return { 1: 1 }
  
  var pf = {}
    , f = []
    , t = n
    , j = 0
  
  if (!ps) ps = require('./primes')(Math.floor(Math.sqrt(n))).ps
  
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
  
  return pf
}