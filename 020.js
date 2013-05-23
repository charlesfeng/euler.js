// http://projecteuler.net/problem=20

var p = [1]
  , c = 0
  , i

for (i = 1; i <= 100; i++) {
  for (var j = 0; j < p.length; j++) {
    p[j] = p[j] * i + c
    c = Math.floor(p[j] / 10)
    p[j] %= 10
  }
  if (c) p = p.concat(('' + c).split('').reverse().map(function (a) { return parseInt(a) }))
  c = 0
}

p.reduce(function (q, d) { return q + d }, 0)

// answer: 648
// runtime: 11 ms