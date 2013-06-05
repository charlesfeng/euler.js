// http://projecteuler.net/problem=23

var primes = require('./modules/primes')
  , factor = require('./modules/factor')

var ps = primes(28123).ps
  , ab = []
  , s = []
  , i, pf
  
for (i = 2; i <= 28123; i++) {
  pf = factor(i, ps)
  
  if (Object.keys(pf).reduce(function (a, j) { return a * (Math.pow(j, pf[j] + 1) - 1) / (j - 1) }, 1) - i > i) {
    ab.push(i)
    ab.forEach(function (c) {
      if (c + i <= 28123 && !s[c + i]) s[c + i] = true
    })
  }
}

module.exports = 28123 * 28124 / 2 - Object.keys(s).reduce(function (a, c) { return a + parseInt(c) }, 0)

// answer: 4179871
// runtime: 1002 ms