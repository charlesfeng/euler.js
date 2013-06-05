// http://projecteuler.net/problem=20

var BigInt = require('./modules/bigint')

for (var n = new BigInt(1), i = 2; i <= 100; i++) n.multiply(i)
  
module.exports = n.toArray().reduce(function (p, c) { return p + c }, 0)

// answer: 648
// runtime: 15 ms

//------------------------------------------------------------------------------------------------//

// var p = [1]
//   , c = 0
//   , i

// for (i = 1; i <= 100; i++) {
//   for (var j = 0; j < p.length; j++) {
//     p[j] = p[j] * i + c
//     c = Math.floor(p[j] / 10)
//     p[j] %= 10
//   }
//   if (c) p = p.concat(('' + c).split('').reverse().map(function (a) { return parseInt(a) }))
//   c = 0
// }

// module.exports = p.reduce(function (q, d) { return q + d }, 0)

// // answer: 648
// // runtime: 14 ms