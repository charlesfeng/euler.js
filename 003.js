// project euler: problem 3 (http://projecteuler.net/problem=3)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the mit license (http://www.opensource.org/licenses/mit)

module.exports = Object.keys(require('./modules/factor')(600851475143)).slice(-1)[0]

// answer: 6857
// runtime: 13 ms

//------------------------------------------------------------------------------------------------//

// var a = 600851475143
//   , b = 2

// while (b < a) {
//   if (a % b) {
//     b++
//   } else {
//     a /= b
//     b = 2
//   }
// }

// module.exports = a

// // answer: 6857
// // runtime: 13 ms