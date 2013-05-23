// http://projecteuler.net/problem=21

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
  
  while (t > 1) {
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

s

// answer: 31626
// runtime: 109 ms