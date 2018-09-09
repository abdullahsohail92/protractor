var Angular_HomePage = function()  
{
  //Enter in textbox 
  this.NameTextBox = function(value) {
    element(by.model('yourName')).sendKeys(value);
  };
  //Get dynamic textbox text
  this.getDynamicText =function() {
    var textboxval = element(by.binding('yourName')).getText();
    return textboxval;
  };
  //Get list object for count
  this.listCount =function() {
    todoList = element.all(by.repeater('todo in todoList.todos'));
    return todoList.count();
  };
  //Get list object for matching string
  this.MatchListValues = function(index) {
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    return todoList.get(index).getText();
  };
  //Enter in list text box
  this.addToListTextBox = function(value){
    var addTodo = element(by.model('todoList.todoText'));
    addTodo.sendKeys(value);
  };
  //Button to add data in list
  this.addToListTextBox = function(){
    var addButton = element(by.css('[value="add"]'));
    addButton.click();
  };

};
//Export this page Model for external use
module.exports = new Angular_HomePage();