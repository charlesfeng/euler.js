// project euler: problem 12 (http://projecteuler.net/problem=12)

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the MIT license (http://www.opensource.org/licenses/MIT)

var factor = require('./modules/factor')
  , n = 0
  , d = 0
  , f

while (d < 500) {
  n++
  f = factor(n * (n + 1) / 2)
  d = Object.keys(f).reduce(function (p, c) { return p * (f[c] + 1) }, 1)
}

module.exports = n * (n + 1) / 2

// answer: 76576500
// runtime: 292 ms

//------------------------------------------------------------------------------------------------//

// var d = 0, n = 0, t, i, a

// while (d < 500) {
//   n++
  
//   t = n * (n + 1) / 2
//   i = 2
//   a = []
  
//   while (t > 1) {
//     if (t % i) i++
//     else {
//       t /= i
//       a[i] = (a[i] || 0) + 1
//       i = 2
//     }
//   }
  
//   d = Object.keys(a).reduce(function (p, c) { return p * (a[c] + 1) }, 1)
// }

// module.exports = n * (n + 1) / 2

// answer: 76576500
// runtime: 271 ms