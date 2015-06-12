




var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver'),
By = require('selenium-webdriver').By;



test.describe('Home Page', function() {
  test.it('should work', function() {
    this.timeout(15000);
    var driver = new webdriver.Builder().forBrowser('firefox').
    build();

    driver.get('http://bit.ly/1Gh9Diz');

    driver.getTitle().then(function(title) {
      assert.equal(title,'Pillar Technology');
    });
    driver.quit();

  });


  test.it('Check In button', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').
      build();

      driver.get('http://bit.ly/1Gh9Diz');

      driver.findElement(By.name("checkInBtn")).getText().then(function(btnText){
        assert.equal(btnText,'Check In');    });


  });


  test.it('Body test', function() {
    this.timeout(15000);
    var driver = new webdriver.Builder().forBrowser('firefox').
    build();

    driver.get('http://bit.ly/1Gh9Diz');


    driver.findElement(By.tagName("body")).getText().then(function(bodyText){
      assert.equal(bodyText,'Hello World!');
    });

    driver.quit();

  });

  test.it('Background Img', function() {
    this.timeout(15000);
    var driver = new webdriver.Builder().forBrowser('firefox').
    build();

    driver.get('http://bit.ly/1Gh9Diz');





    driver.findElement(By.tagName("body")).getCssValue('background').then(function(img){
      assert.equal(img,'transparent url("./frontdoor.jpg") no-repeat fixed center center / cover ');

  });




    driver.quit();

  });



});
