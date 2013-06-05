// project euler: problem 9 (http://projecteuler.net/problem=9)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the MIT license (http://www.opensource.org/licenses/MIT)

module.exports = (function () {
  for (var c, a = 1; a <= 998; a++) {
    for (var b = a; b <= 999 - a; b++) {
      c = 1000 - a - b
      if (a * a + b * b === c * c) return a * b * c
    }
  }
})()

// answer: 31875000
// runtime: 13 ms