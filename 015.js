// http://projecteuler.net/problem=15

var f = function (a) { return a ? a * f(a - 1) : 1 }

module.exports = f(40) / (f(20) * f(20))

// answer: 137846528820
// runtime: 12 ms

//------------------------------------------------------------------------------------------------//

// module.exports = (function count(x, y) {
//   return (x > 1 ? count(x - 1, y) : 1) + (y > 1 ? count(x, y - 1) : 1)
// })(20, 20)

// // answer: 137846528820
// // runtime: ∞ ms