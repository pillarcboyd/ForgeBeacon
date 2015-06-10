var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('
          <html>
          <head>
          <title>Hello World</title>
          </head>
          <body>My cool html</body>
          </html>
          ');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
