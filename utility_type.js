"use strict";
//utility type 
/*function addTodo(title: string, description: string){
    let myTodo: Partial<Todo> = {};
    myTodo.title =  title;
    myTodo.description = description;

    return myTodo;
}*/
function addTod(title, description) {
    let myTodo = {};
    myTodo.title = title;
    myTodo.description = description;
    return myTodo;
    //return <Todo> myTodo;
}
const todo = addTod("Sport", "Faire un footing");
console.log(todo);
