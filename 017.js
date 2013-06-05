// project euler: problem 17 (http://projecteuler.net/problem=17)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the MIT license (http://www.opensource.org/licenses/MIT)

var o = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4] // 0-9
  , n = [3, 6, 6, 8, 8, 7, 7, 9, 8, 8] // 10-19
  , t = [6, 6, 5, 5, 5, 7, 6, 6] // 20-90

  , so = o.reduce(function (p, d) { return p + d }, 0) // ∑0-9
  , sn = n.reduce(function (p, d) { return p + d }, 0) // ∑10-19
  , st = t.reduce(function (p, d) { return p + d * 10 + so }, 0) // ∑20-99
  , sh = o.reduce(function (p, d) { return p + (d ? (d + 7) * 100 + 3 * 99 : 0) + so + sn + st }, 0) // ∑1-999

module.exports = sh + 11

// answer: 21124
// runtime: 13 ms