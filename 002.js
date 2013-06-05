// project euler: problem 2 (http://projecteuler.net/problem=2)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the MIT license (http://www.opensource.org/licenses/MIT)

var i = 1, j = 2, sum = 0

while (i < 4000000) { 
  sum += (i % 2 ? 0 : i) + (j >= 4000000 || j % 2 ? 0 : j)
  i += j
  j += i
}

module.exports = sum

// answer: 4613732
// runtime: 13 ms