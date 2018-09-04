//initialize chai
var chai = require('chai');
chai.use(require('chai-smoothie'));
var expect = chai.expect;
//invoke test data file
var testData = require('../TestData/AngularTestData.json');
beforeEach(() => {
  //waiting for angular to enabled
  browser.waitForAngularEnabled(false);
  //Browser URL
  browser.get(testData[0].url.toString());

});
//1st testcase
describe(testData[0].TestName, function() {

  var Angular_HomePage = require('../pageObject/AngularJsHome.js')
  //Step 1
  it('Step#:' + testData[0].TestcaseId + ': ' + testData[0].TestStepDescription, () => {
    Angular_HomePage.NameTextBox(testData[0].name);
    var getHomepageText = Angular_HomePage.getDynamicText();
    //expect(getHomepageText).toBe(testData[0].nameAssertion);
    expect(getHomepageText).to.have.text(testData[0].nameAssertion)
  });

  //Step 2
  it('Step#:' + testData[1].TestcaseId + ': ' + testData[1].TestStepDescription, () => {
    var listItem = Angular_HomePage.MatchListValues(1);
    //expect(listItem).toBe(testData[0].ListItemText);
    expect(listItem).to.have.text(testData[0].ListItemText)
  });

  //Step 3
  it('Step#:' + testData[2].TestcaseId + ': ' + testData[2].TestStepDescription, () => {
    var res = expect(element(by.css('h1'))).to.be.present;

  });
  //Step 4
  it('Step#:' + testData[3].TestcaseId + ': ' + testData[3].TestStepDescription, () => {


  });

}),
  //2nd testcase
  xdescribe(testData[1].TestName, () => {

    var Angular_HomePage = require('../pageObject/AngularJsHome.js')
    //Step 1
    it('Step#:' + testData[0].TestcaseId + ': ' + testData[0].TestStepDescription, () => {
      Angular_HomePage.NameTextBox(testData[0].name);
      var getHomepageText = Angular_HomePage.getDynamicText();
      //expect(getHomepageText).toBe(testData[0].nameAssertion);
      expect(getHomepageText).to.have.text(testData[0].nameAssertion)
    });

    //Step 2
    it('Step#:' + testData[1].TestcaseId + ': ' + testData[1].TestStepDescription, () => {
      var listItem = Angular_HomePage.MatchListValues(1);
      //expect(listItem).toBe(testData[0].ListItemText);
      expect(listItem).to.have.text(testData[0].ListItemText)
    });

    //Step 3
    it('Step#:' + testData[2].TestcaseId + ': ' + testData[2].TestStepDescription, () => {
      var res = expect(element(by.css('h1'))).to.be.present;

    });
    //Step 4
    it('Step#:' + testData[3].TestcaseId + ': ' + testData[3].TestStepDescription, () => {


    });

  }),
  //3rd testcase
  xdescribe(testData[2].TestName, () => {

    var Angular_HomePage = require('../pageObject/AngularJsHome.js')
    //Step 1
    it('Step#:' + testData[0].TestcaseId + ': ' + testData[0].TestStepDescription, () => {
      Angular_HomePage.NameTextBox(testData[0].name);
      var getHomepageText = Angular_HomePage.getDynamicText();
      //expect(getHomepageText).toBe(testData[0].nameAssertion);
      expect(getHomepageText).to.have.text(testData[0].nameAssertion)
    });

    //Step 2
    it('Step#:' + testData[1].TestcaseId + ': ' + testData[1].TestStepDescription, () => {
      var listItem = Angular_HomePage.MatchListValues(1);
      //expect(listItem).toBe(testData[0].ListItemText);
      expect(listItem).to.have.text(testData[0].ListItemText)
    });

    //Step 3
    it('Step#:' + testData[2].TestcaseId + ': ' + testData[2].TestStepDescription, () => {
      var res = expect(element(by.css('h1'))).to.be.present;

    });
    //Step 4
    it('Step#:' + testData[3].TestcaseId + ': ' + testData[3].TestStepDescription, () => {


    });

  });

