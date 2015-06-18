var contactsJSON = require('./data/contacts.json')
var nodemailer = require('nodemailer');
require('dotenv').load();

module.exports = {
  createEmail: function (toAddressID, nameAtDoor,callback) {
    var sendEmailOutput = sendEmail(toAddressID, nameAtDoor);
    callback(sendEmailOutput);
  },
  setMailOptions: function (toAddress, nameAtDoor,callback) {
    var output = setMailOptions(toAddress, nameAtDoor);

    callback(output);
  },
};



function sendEmail(toAddressID, nameAtDoor) {

  var toAddress = "";

    for (var i = 0; i < contactsJSON["contacts"].length; i++) {
      if(contactsJSON["contacts"][i].id == toAddressID ){
        toAddress = contactsJSON["contacts"][i].email;
      }
    }
  mailOptions = setMailOptions(toAddress, nameAtDoor)
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
    }else{
      console.log("E-mail sent to"+mailOptions.to+ " with subject \'"+mailOptions.subject+"\'");
    }
  });
  return mailOptions;
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
