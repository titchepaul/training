//export{}
//Exercice 1
let names: string;
let speed: number = 25;
let isLoading: boolean;
let age: number | string;
age = 10;

//Exercice 2
let color: string[] = [];
color.push('red');
console.log(color[0]);

let infos: (string | number | boolean)[] = [];
infos.push('dupont');
infos.push(40);
infos.push(true);
console.log(infos);

//Exercice 3
let number:{
    firstName: string;
    age: number;
    isLoggedIn: boolean;
} = {
    firstName: 'Dupont',
    age: 20,
    isLoggedIn: true
};
console.log(number.age);
//ou par inference
// let number = {
//     firstName: 'Dupont',
//     age: 20,
//     isLoggedIn: true
// }
//Exercice 7
let info: [string,number];
