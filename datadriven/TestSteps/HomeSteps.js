
//initialize chai
var chai = require('chai');
chai.use(require('chai-smoothie'));
var expect = chai.expect;
//invoke test data file
var testData = require('../TestData/AngularTestData.json');
var HomeStep = function()  
{
    var Angular_HomePage = require('../pageObject/AngularJsHome.js')
//step1
this.step1=function(){
Angular_HomePage.NameTextBox(testData[0].name);
    var getHomepageText = Angular_HomePage.getDynamicText();
    //expect(getHomepageText).toBe(testData[0].nameAssertion);
    expect(getHomepageText).to.have.text(testData[0].nameAssertion)
};

//step2
this.step2=function()
{
    var listItem = Angular_HomePage.MatchListValues(1);
    //expect(listItem).toBe(testData[0].ListItemText);
    expect(listItem).to.have.text(testData[0].ListItemText)

};

//step3
this.step3=function()
{
    var listItem = Angular_HomePage.MatchListValues(1);
    var res = expect(element(by.css('h1'))).to.be.present;

};

//step4
this.step4=function()
{

};
};

//Export this page Model for external use
module.exports = new HomeStep();