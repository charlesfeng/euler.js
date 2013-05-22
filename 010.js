var a = []
  , i = 2

while (!a.length || a[a.length - 1] < 2000000) {
  if (!a.some(function (c) { return !(i % c) }))
    a.push(i)
  i++
}

a.reduce(function (p, c) { return p + c }, 0)
