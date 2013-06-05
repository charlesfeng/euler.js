// http://projecteuler.net/problem=1

for (var sum = 0, i = 0; i < 1000; i++)
  sum += (i % 3 && i % 5 ? 0 : i)

module.exports = sum

// answer: 233168
// runtime: 12 ms