var c = { 1: 1 }, t, n

for (var i = 1; i < 1000000; i++) {
  t = i
  n = 0
  while (!c[t]) {
    t = t % 2 ? 3 * t + 1 : t / 2
    n++
  }
  c[i] = c[t] + n
}

Math.max.apply(null, Object.keys(c).map(function (k) { return c[k] }))
