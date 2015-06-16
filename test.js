

//http://bit.ly/1cQbHmV
var webAddress = "http://localhost:8080/",
assert = require('assert'),
http = require('http'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver'),
By = require('selenium-webdriver').By,
smallLayoutWidth = 730,
smallLayoutHeight = 900;




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

  test.it('Should display Who are you here to see DDL', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.findElement(By.id("notifyDL")).getAttribute("name").then(function(notifyDLName){
        assert.equal(notifyDLName,'notifyDL');
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

  test.it('Resizes header to match logo size when window is narrow', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.manage().window().setSize(smallLayoutWidth, smallLayoutHeight);
      driver.get(webAddress);

      var titleBarHeight = driver.findElement(By.id('titleBar')).getCssValue('height').then(function(titleBarHeight) {
        var logoHeight = driver.findElement(By.id('logoImg')).getCssValue('height').then(function(logoHeight) {
          assert(logoHeight <= titleBarHeight);
        });
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

  test.it('Displays confirmation message after user clicks Check In button', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.findElement(By.name("checkInBtn")).click();
      driver.findElement(By.id("topMsg")).getAttribute("innerHTML").then(function(message){
        assert.equal(message,'Thank you! Please have a seat. We\'ll be right with you!');
      });
      driver.close();

  });


  test.it('Should have welcome message', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.findElement(By.xpath("//*[@id=\"banner\"]/div/div/div[1]/p")).getText().then(function(welcomeText){
        assert.equal(welcomeText, "Welcome to The Forge by Pillar Technology! We are happy to have you here today. Please take a moment to check in and a team member will be with you shortly.");
      });
      driver.close();

  });

  test.it('Should have LLC Message and Hyperlink', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.findElement(By.xpath("//*[@id=\"copyright\"]/a")).getText().then(function(copyrightText){
        assert.equal(copyrightText, "Pillar Technology Group, LLC @ 2015");
      });
      driver.findElement(By.xpath("//*[@id=\"copyright\"]/a")).getAttribute("href").then(function(copyrightHref){
        assert.equal(copyrightHref, "http://www.pillartechnology.com/");
      });

      driver.close();

  });




  test.it('Returns HTTP 200 when email is sent', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      http.get('http://localhost:8080/send', function(response) {
        assert.equal(response.statusCode, 200);
      });


      driver.close();

  });

  test.it('Should scroll to sculpture IMG!!!!', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.manage().window().setSize(735,500);
      driver.get(webAddress);



      driver.findElement(By.name("checkInBtn")).click();
      var element =driver.findElement(By.id("seatNSculptureImg"));

      setTimeout(function(){

        element.getLocation().then(function(result){

          assert.equal(result.x,0);
          assert.equal(result.y,0);

        });

      },3000);







      driver.close();
  });



});
