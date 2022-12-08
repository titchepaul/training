"use strict";
//utility type 
/*function addTodo(title: string, description: string){
    let myTodo: Partial<Todo> = {};
    myTodo.title =  title;
    myTodo.description = description;

    return myTodo;
}*/
function addTodo(title, description) {
    let myTodo = {};
    myTodo.title = title;
    myTodo.description = description;
    return myTodo;
    //return <Todo> myTodo;
}
const tod = addTodo("Sport", "Faire un footing");
console.log(tod);
