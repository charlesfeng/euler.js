// runs a problem

var n = process.argv[2]
while (n.length < 3) n = '0' + n

var d = Date.now()
try {
  console.log('answer: ' + require('./' + n))
  console.log('runtime: ' + (Date.now() - d) + ' ms')
} catch (e) {
  console.log('' + e)
}