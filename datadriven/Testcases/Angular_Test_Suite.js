//initialize chai
var chai = require('chai');
chai.use(require('chai-smoothie'));
var expect = chai.expect;
//invoke test data file
var testData = require('../TestData/AngularTestData.json');
describe(testData.TestName, () => {

  beforeEach(() => {
    //waiting for angular to enabled
    browser.waitForAngularEnabled(false);
    //Browser URL
    browser.get(testData[0].url.toString());

  });

  var Angular_HomePage = require('../pageObject/AngularJsHome.js')
  //1st testcase
  it('Testcase ID:' + testData[0].TestcaseId + ': ' + testData[0].TestStepDescription, () => {
    Angular_HomePage.NameTextBox(testData[0].name);
    var getHomepageText = Angular_HomePage.getDynamicText();
    //expect(getHomepageText).toBe(testData[0].nameAssertion);
    expect(getHomepageText).to.have.text(testData[0].nameAssertion)
  });

  //2nd testcase
  it('Testcase ID:' + testData[1].TestcaseId + ': ' + testData[1].TestStepDescription, () => {
    var listItem = Angular_HomePage.MatchListValues(1);
    //expect(listItem).toBe(testData[0].ListItemText);
    expect(listItem).to.have.text(testData[0].ListItemText)
  });

  //3rd testcase
  it('Testcase ID:' + testData[2].TestcaseId + ': ' + testData[2].TestStepDescription, () => {
    var res=expect(element(by.css('h1'))).to.be.present;   
    
   
  });

});

