

//http://bit.ly/1Gh9Diz
var webAddress = "http://localhost:8080/",
assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver'),
By = require('selenium-webdriver').By,
driver = new webdriver.Builder().forBrowser('firefox').build();



test.describe('Home Page', function() {
  test.it('Should serve correct page', function() {
    this.timeout(15000);
    var driver = new webdriver.Builder().forBrowser('firefox').
    build();

    driver.get(webAddress);

    driver.getTitle().then(function(title) {
      assert.equal(title,'Pillar Technology');
    });
    driver.quit();

  });


  test.it('Should display Check In button', function() {
      this.timeout(15000);

      driver.get(webAddress);

      driver.findElement(By.name("checkInBtn")).getAttribute("value").then(function(btnText){
        assert.equal(btnText,'Check In');
      });
      driver.quit();

  });

});
