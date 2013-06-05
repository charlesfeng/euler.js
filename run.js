// project euler solution bootstrapper

// (c) 2013 charles feng (https://github.com/charlesfeng)
// shared under the MIT license (http://www.opensource.org/licenses/MIT)

var n = process.argv[2]
while (n.length < 3) n = '0' + n

var d = Date.now()
try {
  console.log('answer: ' + require('./' + n))
  console.log('runtime: ' + (Date.now() - d) + ' ms')
} catch (e) {
  console.log(e)
}