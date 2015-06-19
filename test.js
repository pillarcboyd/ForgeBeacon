

//http://bit.ly/1cQbHmV
var webAddress = "http://localhost:8080/",
assert = require('assert'),
http = require('http'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver')
require('chai').should()
require('webdriverjs-helper');
By = require('selenium-webdriver').By,
should = require('should'),
request = require('request'),
url = require('url'),
sendEmail = require('./sendEmail.js'),
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

  test.it('Should default to Who are you here to see in DDL', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.dropdownlist('#notifyDL').values(function(values){
        assert(values.should.eql(["WAUH2S"]));
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

  test.it('Should rotate image after checken Click', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.findElement(By.xpath("//*[@id=\"features\"]/div/div/div[1]/section/a/img")).getAttribute("src").then(function(btnText){
        assert.equal(btnText,'http://localhost:8080/images/frontdoor.jpg');
        driver.dropdownlist('#notifyDL').option("dabney");
        driver.findElement(By.name("checkInBtn")).click();
        driver.findElement(By.xpath("//*[@id=\"features\"]/div/div/div[1]/section/a/img")).getAttribute("src").then(function(btnText){
          assert.equal(btnText,'http://localhost:8080/images/SeatNSculpture.JPG');
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
      driver.dropdownlist('#notifyDL').option("dabney");
      driver.findElement(By.name("checkInBtn")).click();
      driver.findElement(By.id("topMsg")).getAttribute("innerHTML").then(function(message){
        assert.equal(message,'Thank you! Please have a seat.  Don Abney will be right with you!');
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




  test.it('Should parse Query string when email is sent with user name entered', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      request({
      url: webAddress + 'send?userName=PersonAtDoor',
      json: true
      }, function (error, response, body) {
          assert.equal(body.userName, "PersonAtDoor");
      });
      driver.close();

  });

  test.it('Should return ID of dabney in JSON if dabney called with URL parameter of dabney', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      request({
      url: webAddress + 'send?pillarPerson=dabney',
      json: true
      }, function (error, response, body) {
          assert.equal(body.pillarPerson, "dabney");
      });
      driver.close();

  });


  test.it('Returns JSON file for contact information', function() {
      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();

      request({
      url: webAddress + 'contacts',
      json: true
      }, function (error, response, body) {
        assert.equal(response.statusCode,200);
      })

      driver.close();

    });

    test.it('At least one pillar name is displayed in the Who Are You Here To See dropdown list', function() {

      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.findElements(By.className("pillarContact")).then(function(pillarContacts){
        assert(pillarContacts.length.should.greaterThan(0));
      });

      driver.close();

    });

    test.it('Should have css class on visitorName', function() {
        this.timeout(15000);
        var driver = new webdriver.Builder().forBrowser('firefox').build();
        driver.get(webAddress);

        driver.findElement(By.id("visitorName")).getAttribute("class").then(function(visitorNameClass){
          assert.equal(visitorNameClass,'roundedTextInput');
        });
        driver.close();

    });

    test.it('Visitor Name field should have border-radius', function() {
        this.timeout(15000);
        var driver = new webdriver.Builder().forBrowser('firefox').build();
        driver.get(webAddress);

        driver.findElement(By.id("visitorName")).getCssValue('border-top-left-radius').then(function(cssValue){
          assert.equal(cssValue,'5px');
        });
        driver.findElement(By.id("visitorName")).getCssValue('border-top-right-radius').then(function(cssValue){
          assert.equal(cssValue,'5px');
        });
        driver.findElement(By.id("visitorName")).getCssValue('border-bottom-left-radius').then(function(cssValue){
          assert.equal(cssValue,'5px');
        });
        driver.findElement(By.id("visitorName")).getCssValue('border-bottom-right-radius').then(function(cssValue){
          assert.equal(cssValue,'5px');
        });

        driver.close();

    });


    test.it('Should email name entered in visitorName', function() {
        this.timeout(15000);
        var driver = new webdriver.Builder().forBrowser('firefox').build();
        driver.get(webAddress);

        driver.findElement(By.id("visitorName")).sendKeys("Test Visitor");
        driver.dropdownlist('#notifyDL').option("dabney");
        driver.findElement(By.name("checkInBtn")).click()
        driver.findElement(By.id("visitorNameTest")).getAttribute("value").then(function(visitorQuery){
          assert.equal(visitorQuery, "Test Visitor");
        });

        driver.close();

    });

    test.it('E-mail of pillar person selected in dropdown populates in hidden text field', function() {
        this.timeout(15000);
        var driver = new webdriver.Builder().forBrowser('firefox').build();
        driver.get(webAddress);

        driver.findElement(By.id("visitorName")).sendKeys("Test Visitor");
        driver.dropdownlist('#notifyDL').option("dabney");
        driver.findElement(By.name("checkInBtn")).click()
        driver.findElement(By.id("pillarPersonTest")).getAttribute("value").then(function(pillarPersonQuery){
          assert.equal(pillarPersonQuery, "dabney");
        });

        driver.close();

    });

    test.it('No email entered in textbox', function() {
        this.timeout(15000);
        var driver = new webdriver.Builder().forBrowser('firefox').build();
        driver.get(webAddress);

        driver.dropdownlist('#notifyDL').option("dabney");
        driver.findElement(By.name("checkInBtn")).click()
        driver.findElement(By.id("visitorNameTest")).getAttribute("value").then(function(visitorQuery){
          assert.equal(visitorQuery, "Someone");
        });

        driver.close();

    });

    test.it('Should have input text field and label', function() {
        this.timeout(15000);
        var driver = new webdriver.Builder().forBrowser('firefox').build();
        driver.get(webAddress);

        driver.findElement(By.id("visitorName")).getAttribute("placeholder").then(function(visitorName){
          assert.equal(visitorName,'Enter Your Name');
        });
        driver.close();

    });

    test.it('Head Shots for dropdown list change', function() {

      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.dropdownlist('#notifyDL').option("dabney");
      driver.findElement(By.xpath("//*[@id=\"features\"]/div/div/div[1]/section/a/img")).getAttribute("src").then(function(imgSrc){
         assert.equal(imgSrc,'http://localhost:8080/images/dabney.jpg');
      });

      driver.close();

    });

    test.it('Has a disabled check in button when page is first loaded', function() {

      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.findElement(By.name("checkInBtn")).getAttribute("disabled").then(function(value){
        assert.equal(value,"true");
      });

      driver.close();

    });


    test.it('Button should enable when dropdown item is selected', function() {

      this.timeout(15000);
      var driver = new webdriver.Builder().forBrowser('firefox').build();
      driver.get(webAddress);

      driver.dropdownlist('#notifyDL').option("dabney");
      driver.findElement(By.name("checkInBtn")).getAttribute("disabled").then(function(value){
        assert.equal(value,null);
      });

      driver.close();

    });






  });
