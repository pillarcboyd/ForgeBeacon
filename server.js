var port = '8080';
var servedFiles = __dirname + '/public';
var express = require('express');
var app = express();
var http = require('http');
var nodemailer = require('nodemailer');
var httpServer = http.Server(app);

var smtpTransport = nodemailer.createTransport({
service: "Gmail",
auth: {
user: "pillartest@pillartechnology.com",
pass: "noConstraints!"
}
});

app.get('/send',function(req,res){
  console.log("Made it to send");
  var mailOptions={
  from: 'pillartest@pillartechnology.com',
  to : 'rucker@pillartechnology.com',
  subject : 'Front Door!',
  text : 'Someone is here to see you! Fly you fool!'
  }
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
  if(error){
  console.log(error);
  res.sendStatus(500);
  }
  res.end();
  });
});

app.use(express.static(servedFiles));

app.listen(port);
console.log('Serving up %s on http://localhost:%s', servedFiles, port);
console.log('Press ctrl + c to cancel.');
