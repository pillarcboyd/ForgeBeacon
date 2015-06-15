

//http://bit.ly/1cQbHmV
var webAddress = "http://localhost:8080/",
assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver'),
By = require('selenium-webdriver').By;



test.describe('Home Page', function() {
  test.it('Should serve correct page', function() {
    this.timeout(15000);
    var driver = new webdriver.Builder().forBrowser('firefox').build();

    driver.get(webAddress);

    driver.getTitle().then(function(title) {
      assert.equal(title,'Pillar Technology');
    });
    driver.close();

  });

  test.it('Should display Check In button', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.findElement(By.name("checkInBtn")).getAttribute("value").then(function(btnText){
        assert.equal(btnText,'Check In');
      });
      driver.close();

  });

  test.it('Should display logo img', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.findElement(By.xpath("//*[@id=\"titleBar\"]/span/img")).getAttribute("src").then(function(btnText){
        assert.equal(btnText,'http://localhost:8080/images/pillar_logo.png');
      });
      driver.close();

  });

  test.it('Should display Front door img', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.findElement(By.xpath("//*[@id=\"features\"]/div/div/div[1]/section/a/img")).getAttribute("src").then(function(btnText){
        assert.equal(btnText,'http://localhost:8080/images/frontdoor.jpg');
      });
      driver.close();

  });

  test.it('Displays confirmation message after email is sent', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.findElement(By.name("checkInBtn")).click();
      driver.findElement(By.name("responseMsg")).getAttribute("value").then(function(btnText){
        assert.equal(btnText,'Thank you! Please have a seat. We\'ll be right with you!');
      });
      driver.close();

  });
});
