interface Todos {
    title: string;
    description: string ; //description?: string
    completed: boolean;
}

let todo1: Todos = {
    title: "sport",
    description: "footing",
    completed: true
}

type TodoPreview = Pick<Todos, "title" | "completed">;
let todo2: TodoPreview = {
    title: "do shopping",
    completed: false,
}