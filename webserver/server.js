const fs = require('fs')
const server = require('http').createServer()

/*
// For HTTPS

// 1. generate cert (this won't be accepted in the browsers without warning, but for testing it's ok)
//  `$ openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes`
// 1. add certs to the server config
  const fs = require('fs')
  const server = require('https').createServer({
    cert: fs.readFileSync('./cert.pem'),
    key: fs.readFileSync('./key.pem')
  })
// 1. server should listen on the https port (443)
  server.listen(443)
// 1. start server with elevated permissions (eg `$ sudo node server.js` for testing)
*/

server.on('request', (req, res) => {
  switch (req.url) {
    case '/api':
      // response JSON
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ some: 'data' }))
      break;
    case '/home':
      // response HTML
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(fs.readFileSync('./home.html'))
      break;
    case '/':
      // redirect
      res.writeHead(301, { 'Location': '/home' })
      res.end()
      break;
    default:
      // default 404
      res.writeHead(404)
      res.end()
  }
})

server.listen(8000)
