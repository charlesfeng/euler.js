// project euler: problem 21 (http://projecteuler.net/problem=21)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the MIT license (http://www.opensource.org/licenses/MIT)

var p = []
  , ps = []
  , i, j

for (i = 2; i < 10000; i++) {
  if (typeof p[i] !== 'undefined') continue
  
  p[i] = true
  ps.push(i)
  
  for (j = 2; j < Math.floor(10000 / i); j++)
    p[i * j] = false
}

var s = 0
  , n = []
  , m = []
  , t, f

for (i = 2; i < 10000; i++) {
  t = i
  f = []
  j = 0
  
  while (t > 1 && j < Math.sqrt(i)) {
    if (t % ps[j]) j++
    else {
      t /= ps[j]
      f[j] = (f[j] || 0) + 1
      j = 0
    }
  }
  
  t = f.reduce(function (a, c, j) { return a * (Math.pow(ps[j], c + 1) - 1) / (ps[j] - 1) }, 1) - i
  m[i] = t
  
  if (i !== t && m[t] && m[t] === i) s += i + t
}

module.exports = s

// answer: 31626
// runtime: 44 ms