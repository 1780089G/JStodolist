var todos = ["Buy New things"];

var input = prompt("What would you like to do")
while(input !== "quit"){
  // handle input
    if(input === "list") {
      console.log("*******")
      todos.forEach(function(todo, i){
        console.log(i + ": " + todo); 
      });
      console.log("*******")
  } else if(input === "new") {
  //ask for new tod do
  //add to the todos array
    var newTodo = prompt("Enter new todo");
  //add to dos array
    todos.push(newTodo);

  } else if(input === "delete"){
      // ask for index of to do to be delete
      var index = prompt("Enter index of todo to delete");
      // delete that to do
      //splice
      todos.splice(index,1);
    }
  
  input = prompt("What would you like to do?");
}
console.log("ok, you quit the app");