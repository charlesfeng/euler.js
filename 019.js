// project euler: problem 19 (http://projecteuler.net/problem=19)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the mit license (http://www.opensource.org/licenses/mit)

var m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  , d = 1
  , n = 0
  , i, j

for (i = 0; i < 12; i++)
  d = (d + m[i]) % 7

for (i = 1901; i <= 2000; i++) {
  for (j = 0; j < 12; j++) {
    n += !d
    d = (d + m[j] + (j === 1 && (i % 100 || !(i % 400)) && !(i % 4))) % 7
  }
}

module.exports = n

// answer: 171
// runtime: 12 ms