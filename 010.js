// http://projecteuler.net/problem=10

var ns = []
  , c = 2
  , s = 0
  , i
  
while (c < 2000000) {
  if (!ns[c]) {
    s += c
    for (i = 1; i <= Math.floor(2000000 / c); i++)
      ns[i * c] = true
  }
  
  c++
}

s

// answer: 142913828922
// runtime: 287 ms