require('dotenv').load();
var port = process.env.port_number;
var servedFiles = __dirname + '/public';
var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);
var contactsJSON = require('./data/contacts.json')
var sendEmail = require('./sendEmail.js');
var url = require('url');

app.get('/send',function(req,res){
  var parameter = url.parse(req.url,true).query;
  var userName = parameter.userName;
  var pillarPersonID = parameter.pillarPerson;


  console.log(parameter);
  sendEmail.createEmail(pillarPersonID,userName,function(){});
  res.writeHead(200, { 'Content-Type': 'application/json'  });

  res.end(JSON.stringify(parameter));

});

app.get('/contacts',function(req,res){
  console.log("Requesting contacts");
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(contactsJSON));
})

app.use(express.static(servedFiles));

app.listen(port);
console.log('Serving up %s on http://localhost:%s', servedFiles, port);
console.log('Press ctrl + c to cancel.');
