// project euler: problem 4 (http://projecteuler.net/problem=4)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the mit license (http://www.opensource.org/licenses/mit)

module.exports = (function () {
  for (var p, i = 1998; i >= 200; i--) {
    for (var j = Math.ceil(i / 2); j <= 999; j++) {
      p = (i - j) * j
      if (('' + p).split('').reverse().join('') === '' + p) return p
    }
  }
})()

// answer: 906609
// runtime: 15 ms