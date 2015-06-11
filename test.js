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



});
