(function () {
  for (var p, i = 1998; i >= 200; i--) {
    for (var j = 999; i - j <= j; j--) {
      p = (i - j) * j
      if (('' + p).split('').reverse().join('') === '' + p) return p
    }
  }
})()
