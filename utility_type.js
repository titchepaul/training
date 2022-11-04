//utility type 
/*function addTodo(title: string, description: string){
    let myTodo: Partial<Todo> = {};
    myTodo.title =  title;
    myTodo.description = description;

    return myTodo;
}*/
function addTodo(title, description) {
    var myTodo = {};
    myTodo.title = title;
    myTodo.description = description;
    return myTodo;
    //return <Todo> myTodo;
}
var todo = addTodo("Sport", "Faire un footing");
console.log(todo);
