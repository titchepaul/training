//interface en mode readonly

interface Todo {
    title: string;
    description: string; 
}
const myTodo: Readonly<Todo> = {
    title: "sport",
    description: "faire du footing"
}
//myTodo.title = "coding"; // no no
console.log(myTodo.title);

let colrs = ["blue", "green", "yellow"];
colors.push("orange");
console.log(colrs);

let colrs2 : Readonly<string[]>= ["Blue","Green","Yellow"];
//colrs2.push("orange"); // non 