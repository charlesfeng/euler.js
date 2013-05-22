// http://projecteuler.net/problem=9

(function () {
  for (var c, a = 1; a <= 998; a++) {
    for (var b = a; b <= 999 - a; b++) {
      c = 1000 - a - b
      if (a * a + b * b === c * c) return a * b * c
    }
  }
})()

// answer: 31875000
// runtime: 11 ms