// http://projecteuler.net/problem=14

for (var c = [0, 1], m = 0, i = 1, j, t, n; i < 1000000; i++) {
  t = i
  n = 0
  while (!c[t]) {
    t = t % 2 ? 3 * t + 1 : t / 2
    n++
  }
  c[i] = c[t] + n
  if (c[i] > m) {
    m = c[i]
    j = i
  }
}

j

// answer: 837799
// runtime: 494 ms