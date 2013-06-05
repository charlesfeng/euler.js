// project euler: problem 10 (http://projecteuler.net/problem=10)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the MIT license (http://www.opensource.org/licenses/MIT)

module.exports = require('./modules/primes')(2000000).ps.reduce(function (p, c) { return p + c }, 0)

// answer: 142913828922
// runtime: 302 ms

//------------------------------------------------------------------------------------------------//

// var ns = []
//   , c = 2
//   , s = 0
//   , i
  
// while (c < 2000000) {
//   if (!ns[c]) {
//     s += c
//     for (i = 1; i <= Math.floor(2000000 / c); i++)
//       ns[i * c] = true
//   }
  
//   c++
// }

// module.exports = s

// // answer: 142913828922
// // runtime: 312 ms