// finds primes using the sieve of eratosthenes.
//
// parameters:
//   n - largest number to test
//
// returns:
//   p - an array s.t. p[n] tells us if n is prime
//   ps - an array of prime numbers

var primes = function (n) {
  var p = []
    , ps = []
    , i, j

  for (i = 2; i <= n; i++) {
    if (typeof p[i] !== 'undefined') continue
    
    p[i] = true
    ps.push(i)
    
    for (j = 2; j <= Math.floor(n / i); j++)
      p[i * j] = false
  }
  
  return {
      p: p
    , ps: ps
  }
}