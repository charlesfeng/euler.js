// http://projecteuler.net/problem=10

var a = []
  , i = 2

while (!a.length || i < 2000000) {
  if (!a.some(function (c) { return !(i % c) }))
    a.push(i)
  i++
}

a.reduce(function (p, c) { return p + c }, 0)

// answer: 142913828922
// runtime: 448536 ms