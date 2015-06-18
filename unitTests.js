

var assert = require('assert');
var http = require('http');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver')
require('chai').should()
require('webdriverjs-helper');
var By = require('selenium-webdriver').By;
var should = require('should');
var request = require('request');
var url = require('url');
var sendMail = require('./sendEmail.js');


test.describe('Server and Email unitTests',function(){


  test.it('Test setMailOptions',function(){

    var toAddress = "bobbyjoe";
    var atDoor ="timtom";

    sendMail.setMailOptions(toAddress,atDoor,function(output){

      assert.equal(output.from,"pillartest@pillartechnology.com (FRONT DOOOR!!!!!)");
     assert.equal(output.to,toAddress);
     assert.equal(output.subject,atDoor+ ' is at the Front Door!');
     assert.equal(output.text,atDoor +' is here to see you! Fly you fool!');

    });





  });


  test.it('Test JASON sends email for corresponding id',function(){

    var toAddress = "dabney";
    var atDoor ="timtom";

    sendMail.createEmail(toAddress,atDoor,function(mailOptions){

    assert.equal(mailOptions.from,"pillartest@pillartechnology.com (FRONT DOOOR!!!!!)");
    assert.equal(mailOptions.to,"7349724153@messaging.sprintpcs.com");
    assert.equal(mailOptions.subject,atDoor+ ' is at the Front Door!');
    assert.equal(mailOptions.text,atDoor +' is here to see you! Fly you fool!');

    });





  });

});
