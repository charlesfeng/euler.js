// http://projecteuler.net/problem=7

var a = []
  , i = 2

while (a.length < 10001) {
  if (!a.some(function (c) { return !(i % c) }))
    a.push(i)
  i++
}

a[10000]

// answer: 104743
// runtime: 2040 ms