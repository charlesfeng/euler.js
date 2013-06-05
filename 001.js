// project euler: problem 1 (http://projecteuler.net/problem=1)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the mit license (http://www.opensource.org/licenses/mit)

for (var sum = 0, i = 0; i < 1000; i++)
  sum += (i % 3 && i % 5 ? 0 : i)

module.exports = sum

// answer: 233168
// runtime: 12 ms