// http://projecteuler.net/problem=3

var a = 600851475143
  , b = 2

while (b < a) {
  if (a % b) {
    b++
  } else {
    a /= b
    b = 2
  }
}

module.exports = a

// answer: 6857
// runtime: 13 ms

//------------------------------------------------------------------------------------------------//

// module.exports = Object.keys(require('./modules/factor')(600851475143)).slice(-1)[0]

// // answer: 6857
// // runtime: 124 ms