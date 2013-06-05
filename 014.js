// project euler: problem 14 (http://projecteuler.net/problem=14)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the MIT license (http://www.opensource.org/licenses/MIT)

var c = [0, 1]
  , m = 0
  , j, t, n

for (var i = 1; i < 1000000; i++) {
  t = i
  n = 0
  while (!c[t]) {
    t = t % 2 ? 3 * t + 1 : t / 2
    n++
  }
  c[i] = c[t] + n
  if (c[i] > m) {
    m = c[i]
    j = i
  }
}

module.exports = j

// answer: 837799
// runtime: 503 ms