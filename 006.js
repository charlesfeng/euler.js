// project euler: problem 6 (http://projecteuler.net/problem=6)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the MIT license (http://www.opensource.org/licenses/MIT)

for (var a = [], i = 1; i <= 100; i++)
  a.push(i)

module.exports = Math.pow(a.reduce(function (p, c) { return p + c }, 0), 2) - a.reduce(function (p, c) { return p + Math.pow(c, 2) }, 0)

// answer: 25164150
// runtime: 13 ms