//utility type 

interface Todo {
    title: string;
    description: string ;
}

/*function addTodo(title: string, description: string){
    let myTodo: Partial<Todo> = {};
    myTodo.title =  title;
    myTodo.description = description;

    return myTodo;
}*/
function addTodo(title: string, description: string): Todo{
    let myTodo: Partial<Todo> = {};
    myTodo.title =  title;
    myTodo.description = description;

    return myTodo as Todo;
    //return <Todo> myTodo;
}
const todo = addTodo("Sport", "Faire un footing");
console.log(todo);