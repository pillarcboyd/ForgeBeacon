var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');

test.describe('Google Search', function() {
  test.it('should work', function() {
    this.timeout(15000);
    var driver = new webdriver.Builder().forBrowser('firefox').
    build();

    driver.get('http://localhost:1337');


    driver.getTitle().then(function(title) {
      assert.equal(title,'Hello World Sweet Kicks');
    });




    driver.quit();

  });
});
