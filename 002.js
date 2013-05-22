var i = 1, j = 2, sum = 0

while (i < 4000000) { 
  sum += (i % 2 ? 0 : i) + (j >= 4000000 || j % 2 ? 0 : j)
  i += j
  j += i
}

sum