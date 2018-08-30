var home_page=function (){

this.enterFiledValue=function(value){
element(by.model('person.name')).sendKeys(value);
};
this.getDynamicText=function(){
return element(by.binding('person.name')).getText();
};
this.CLickContinue=function(){
element(by.buttonText('CONTINUE')).click();
};
};
module.exports=new home_page();