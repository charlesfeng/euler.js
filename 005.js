// project euler: problem 5 (http://projecteuler.net/problem=5)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the mit license (http://www.opensource.org/licenses/mit)

for (var m = [], t, i = 2; i <= 20; i++) {
  t = i
  m.forEach(function (f) {
    t /= (t % f ? 1 : f)
  })
  if (t !== 1) m.push(t)
}

module.exports = m.reduce(function (p, c) { return p * c }, 1)

// answer: 232792560
// runtime: 13 ms