var nodemailer = require('nodemailer');
require('dotenv').load();

module.exports = {
  createEmail: function (toAddress, nameAtDoor) {
    sendEmail(toAddress, nameAtDoor)
  },
};

function sendEmail(toAddress, nameAtDoor) {
  mailOptions = setMailOptions(toAddress, nameAtDoor)
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
    } else {
      console.log("E-mail sent to " + mailOptions.to + " with subject \'" + mailOptions.subject + "\'");
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

function setMailOptions(toAddress, nameAtDoor){
  var output = {
    from: process.env.mail_from,
    to: toAddress,
    subject: nameAtDoor + ' is at the Front Door!',
    text: nameAtDoor + ' is here to see you! Fly you fool!'
  };
  return output;
}
