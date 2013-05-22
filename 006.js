// http://projecteuler.net/problem=6

for (var a = [], i = 1; i <= 100; i++)
  a.push(i)

Math.pow(a.reduce(function (p, c) { return p + c }, 0), 2) - a.reduce(function (p, c) { return p + Math.pow(c, 2) }, 0)

// answer: 25164150
// runtime: 10 ms