

  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
  }
  });
    transporter.sendMail({
    from: '',
    to: '',
    subject: 'Front Door',
    text: 'Someone is here to see you! Fly you fool!'
  });

console.log("Hi there");
