var todos = ["Buy New things"];

var input = prompt("What would you like to do")
while(input !== "quit"){
  // handle input
    if(input === "list") {
      listTodos();
  } else if(input === "new") {
      addTodo();

  } else if(input === "delete"){
      deleTodo();
    }
  
  input = prompt("What would you like to do?");
}
console.log("ok, you quit the app");
function listTodos(){
      console.log("*******")
      todos.forEach(function(todo, i){
        console.log(i + ": " + todo); 
      });
      console.log("*******")
    }
function addTodo(){
  //ask for new tod do
  //add to the todos array
  var newTodo = prompt("Enter new todo");
  //add to dos array
    todos.push(newTodo);
  console.log("Added todo");
}
function deleteTodo(){
  // ask for index of to do to be delete
  var index = prompt("Enter index of todo to delete");
  // delete that to do
  //splice
    todos.splice(index,1);
  console.log("Deleted todo");
}