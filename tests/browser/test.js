module.exports = {
  "step one" : function (browser) {
    browser
      .url("http://www.google.com")
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
  },

  "step two" : function (browser) {
    browser
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'The Night Watch')
      .end();
  }
};
