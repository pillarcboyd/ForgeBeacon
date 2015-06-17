var nodemailer = require('nodemailer');
require('dotenv').load();

module.exports = {
  createEmail: function (toAddress, nameAtDoor) {
    sendEmail(toAddress, nameAtDoor)
  },
};

function sendEmail(toAddress, nameAtDoor) {
  console.log("Woah, "+nameAtDoor+" is here!")
  smtpTransport.sendMail(mailOptions, function(error, response){

    if(error){
      console.log(error);
      res.sendStatus(500);
    } else {
      console.log("E-mail sent to " + process.env.mail_to);
    }
  });
}

var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.mail_user,
    pass: process.env.mail_pass
  }
});

var mailOptions={
  from: process.env.mail_from,
  to : process.env.mail_to,
  subject : 'Front Door!',
  text : 'Someone is here to see you! Fly you fool!'
}
