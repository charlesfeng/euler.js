// http://projecteuler.net/problem=7

var ns = []
  , c = 2
  , n = 0
  , i
  
while (n < 10001) {
  if (!ns[c]) {
    n++
    for (i = 1; i <= Math.floor(2000000 / c); i++)
      ns[i * c] = true
  }
  
  c++
}

c - 1

// answer: 104743
// runtime: 268 ms