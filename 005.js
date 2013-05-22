// http://projecteuler.net/problem=5

for (var m = [], t, i = 2; i <= 20; i++) {
  t = i
  m.forEach(function (f) {
    t /= (t % f ? 1 : f)
  })
  if (t !== 1) m.push(t)
}

m.reduce(function (p, c) { return p * c }, 1)

// answer: 232792560
// runtime: 10 ms