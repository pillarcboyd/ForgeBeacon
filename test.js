

var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://localhost:1337');
driver.wait(function() {
 return driver.getTitle().then(function(title) {
   return title === 'Hello World';
 });
}, 3000);

driver.quit();
