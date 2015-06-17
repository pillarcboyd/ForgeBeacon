var nodemailer = require('nodemailer');
require('dotenv').load();

module.exports = {
  createEmail: function (toAddress, nameAtDoor) {
    sendEmail(toAddress, setDefault(nameAtDoor, "Someone"))
  },
};

function setDefault(valueAsIs, defaultValue){
  if (typeof valueAsIs == 'undefined'){valueAsIs = defaultValue}
  return valueAsIs;
}

function sendEmail(toAddress, nameAtDoor) {
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
    to: toAddress,
    subject: nameAtDoor + ' is at the Front Door!',
    text: nameAtDoor + ' is here to see you! Fly you fool!'
  };
  return output;
}
