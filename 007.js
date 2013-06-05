// http://projecteuler.net/problem=7

module.exports = require('./modules/primes')(120000).ps[10000]

// answer: 104743
// runtime: 28 ms

//------------------------------------------------------------------------------------------------//

// var ns = []
//   , c = 2
//   , n = 0
//   , i
  
// while (n < 10001) {
//   if (!ns[c]) {
//     n++
//     for (i = 1; i <= Math.floor(200000 / c); i++)
//       ns[i * c] = true
//   }
//   c++
// }

// module.exports = c - 1

// // answer: 104743
// // runtime: 42 ms

//------------------------------------------------------------------------------------------------//

// var a = []
//   , i = 2

// while (a.length < 10001) {
//   if (!a.some(function (c) { return !(i % c) }))
//     a.push(i)
//   i++
// }

// a[10000]

// // answer: 104743
// // runtime: 2040 ms