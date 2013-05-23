// http://projecteuler.net/problem=23

var p = []
  , ps = []
  , i, j

for (i = 2; i < 28123; i++) {
  if (typeof p[i] !== 'undefined') continue
  
  p[i] = true
  ps.push(i)
  
  for (j = 2; j < Math.floor(28123 / i); j++)
    p[i * j] = false
}

var s = {}
  , ab = []
  , t, f

for (i = 2; i < 28123; i++) {
  t = i
  f = []
  j = 0
  
  while (t > 1) {
    if (t % ps[j]) j++
    else {
      t /= ps[j]
      f[j] = (f[j] || 0) + 1
      j = 0
    }
  }
  
  t = f.reduce(function (a, c, j) { return a * (Math.pow(ps[j], c + 1) - 1) / (ps[j] - 1) }, 1) - i
  
  if (t > i) {
    ab.push(i)
    ab.forEach(function (c) { if (c + i <= 28123 && !s[c + i]) s[c + i] = true })
  }
}

28123 * 28124 / 2 - Object.keys(s).reduce(function (a, c) { return a + parseInt(c) }, 0)

// answer: 4179871
// runtime: 1477 ms