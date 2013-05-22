// http://projecteuler.net/problem=16

for (var a = [1], i = 1, j; i <= 1000; i++) {
  a = a.map(function (d) { return d * 2 })
  
  for (j = 0; j < a.length; j++) {
    if (a[j] >= 10) {
      a[j + 1] = (a[j + 1] || 0) + Math.floor(a[j] / 10)
      a[j] %= 10
    }
  }
}

a.reduce(function (p, c) { return p + c }, 0)

// answer: 1366
// runtime: 23 ms