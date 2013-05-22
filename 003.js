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

a

// answer: 6857
// runtime: 11 ms