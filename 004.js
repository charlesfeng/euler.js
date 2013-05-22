(function () {
  for (var p, i = 1998; i >= 200; i--) {
    for (var j = Math.ceil(i / 2); j <= 999; j++) {
      p = (i - j) * j
      if (('' + p).split('').reverse().join('') === '' + p) return p
    }
  }
})()
