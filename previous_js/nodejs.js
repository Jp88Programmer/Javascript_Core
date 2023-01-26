// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
//   console.log('hello wrold')
// })

const fs = require('fs')

let text = fs.readFileSync('JS//fwrite.txt', 'utf-8')
console.log(text)

while (text.includes('harshad')) {
  text = text.replace('harshad', 'jiyansh')
}

fs.writeFileSync('JS//fwrite.txt', text)
console.log(text)
console.log('file update..')

text = fs.readFileSync('JS//fwrite.txt', 'utf-8')
console.log(text)
