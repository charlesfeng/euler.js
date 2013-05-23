// http://projecteuler.net/problem=24

var t = 1000000
  , a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  , f = [1]
  , p = 0
  , c, i

for (i = 1; i < 10; i++)
  f[i] = f[i - 1] * i

for (i = 10; i--; ) {
  c = Math.floor((t - 1) / f[i])
  p = 10 * p + a[c]
  t -= c * f[i]
  a.splice(c, 1)
}

p

// answer: 2783915460
// runtime: 11 ms