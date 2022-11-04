//onmit c'est le contraire de pick
interface Todoo {
    title: string;
    description: string ; 
    completed: boolean;
}

type TodoPrev = Omit<Todoo, "title" | "completed">;
let todoo: TodoPrev = {
    description: " watch a videos"
}