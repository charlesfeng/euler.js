// http://projecteuler.net/problem=24

var t = 1000000
  , f = [1]
  , p = 0
  , a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  , c, i

for (i = 2; i < 10; i++)
  f[i - 1] = f[i - 2] * i

for (i = 10; --i; ) {
  c = 0
  
  while (t > f[i - 1]) {
    t -= f[i - 1]
    c++
  }
  
  p = 10 * p + a[c]
  a.splice(c, 1)
}

p = 10 * p + a[0]

// answer: 2783915460
// runtime: 11 ms