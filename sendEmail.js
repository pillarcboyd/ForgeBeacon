var nodemailer = require('nodemailer');
require('dotenv').load();

module.exports = {
  createEmail: function (toAddress, nameAtDoor) {
    sendEmail(toAddress, setDefaultNameAtDoor(nameAtDoor))
  },
};

function setDefaultNameAtDoor(nameAtDoor){
  if (typeof nameAtDoor == 'undefined'){nameAtDoor = "Someone"}
  return nameAtDoor;
}

function sendEmail(toAddress, nameAtDoor) {
  console.log("Woah, "+nameAtDoor+" is here!")
  smtpTransport.sendMail(mailOptions(toAddress, nameAtDoor), function(error, response){

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

function mailOptions(toAddress, nameAtDoor){
  var output = {
    from: process.env.mail_from,
    to : toAddress,
    subject : nameAtDoor + ' is at the Front Door!',
    text : nameAtDoor + ' is here to see you! Fly you fool!'
  }
  return output;
}
