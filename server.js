require('dotenv').load();
var port = process.env.port_number;
var servedFiles = __dirname + '/public';
var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);


var sendEmail = require('./sendEmail.js');


app.get('/send',function(req,res){
  sendEmail.createEmail(process.env.mail_to);
});

app.use(express.static(servedFiles));

app.listen(port);
console.log('Serving up %s on http://localhost:%s', servedFiles, port);
console.log('Press ctrl + c to cancel.');
