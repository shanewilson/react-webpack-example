module.exports = {
  "step one" : function (browser) {
    browser
      .url("file://" + __dirname + "/../../dist/index.html")
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('nav', 1000)
      .assert.elementPresent('nav')
      .click('.ns-LinkTo--projects')
      .pause(200)
      .assert.containsText('h1', 'Projects')
  },

  "step two" : function (browser) {
    browser
      .assert.elementPresent('.ns-LinkTo--projects')
      .waitForElementVisible('.ns-LinkTo--project', 1000)
      .click('.ns-LinkTo--project')
      .pause(200)
      .assert.containsText('h1', 'Project PR1')
      .end();
  }
};
