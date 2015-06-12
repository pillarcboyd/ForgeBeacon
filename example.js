//var port = '8080'
//var connect = require('connect');
//var serveStatic = require('serve-static');
//var url = require('url');
//var req = require('request');
//connect().use(serveStatic(__dirname, {'index': ['index.html', 'index.htm']})).listen(port);
//console.log('Serving up %s on http://localhost:%s', __dirname, port);
//var requrl = url.parse(req.url, true);
//console.log(requrl);
//var serve = serveStatic('public/ftp', {'index': ['index.html', 'index.htm']})
//if (requrl.pathname === '/') {
//  console.log('sup baby?');}

var port = '8080';
var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);

app.use(express.static(__dirname));

app.get('/', function(req, res){
      res.sendFile(__dirname + '/index.htm');
});
app.listen(port);
console.log('Serving up %s on http://localhost:%s', __dirname, port);
console.log('Press ctrl + c to cancel.');
