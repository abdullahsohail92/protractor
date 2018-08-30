 // 'use strict';

 //invoke test data file
var testData = require('../TestData/testdata.json');
describe('Automation Test Suite->',()=>
 {
 
 beforeEach(()=>{
    //waiting for angular to enabled
  browser.waitForAngularEnabled(false);
	//Browser URL
    browser.get(testData[0].url.toString());
	
 });  
  
  var home_page=require('../pageObject/Home.js')
  //1st testcase
  it('1st testcase',()=>
  {
    home_page.enterFiledValue(testData[0].fieldvalue);
    var getHomepageText=home_page.getDynamicText();
    expect(getHomepageText).toBe(testData[0].fieldvalue);
  });
//2nd testcase
   xit('2nd testcase', ()=>
  {
 
  element(by.css("#i0116")).sendKeys(testData[0].username);
	element(by.buttonText("#i0118")).click();
  element(by.css("password")).sendKeys(testData[0].passwordField); 
  element(by.buttonText("Sign in")).click();
  });
  
 }); 
 
 