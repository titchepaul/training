//generics does not exist in javascript

interface User<T> {
    id: number;
    data: T;
}

const userData: User<string[]> = {
    id: 24,
    data: ["Mario","Moderator"]
}
const userData2: User<object> = {
    id: 24,
    data: {name: "Mario", role: "Moderateur"}
}
const userData3: User<{name: string, role: string}> = {
    id: 24,
    data: {name: "Mario", role: "Moderateur"}
}
console.log(userData2);