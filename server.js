require('dotenv').load();
var port = process.env.port_number;
var servedFiles = __dirname + '/public';
var express = require('express');
var app = express();
var http = require('http');
var nodemailer = require('nodemailer');
var httpServer = http.Server(app);
var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.mail_user,
    pass: process.env.mail_pass
  }
});


app.get('/send',function(req,res){
    console.log("Made it to send");
    var mailOptions={
    from: process.env.mail_from,
    to : process.env.mail_to,
    subject : 'Front Door!',
    text : 'Someone is here to see you! Fly you fool!'
  }
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
  if(error){
  console.log(error);
  res.end("error");
  }else{
  console.log("Message sent: " + response.message);
  res.end("sent");
  }
  });
});

app.use(express.static(servedFiles));

app.listen(port);
console.log('Serving up %s on http://localhost:%s', servedFiles, port);
console.log('Press ctrl + c to cancel.');
