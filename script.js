"use strict";
//export{};
//js type dynanmique 
//ts type stricte
const pi = Math.PI;
console.log(pi);
const sum1 = (val1, val2) => {
    if (typeof val1 == 'number' && typeof val2 == 'number') {
        return val1 + val2;
    }
    else {
        throw new Error("impossible à calculer ");
    }
};
//sum1(2,2)
console.log(sum1(2, 2));
// const sum2 = (val1 : number, val2 : number) => {
//     return val1 + val2;
// }
//les tableaux -  Arrays
//let colors: string[] = ['red','blue', 'green','orange'];
//let colors: Array<string> = ['red','blue', 'green','orange'];
let colors = ['red', 'blue', 'green', 'orange'];
let strNumArray = ['red', 9, false]; //via inference
//Type tuple 
let x;
x = ['hello', 20];
console.log(x);
//x = ['hello', 20,10]; //iimpossible 
x.push(5); //ça marche, le push deroge a cette règle
console.log(x);
// const  menber = {
//     level : ['adamin', 1]
// }
// menber.level[0] = 200;
//le forcer en tuple
const menber = {
    level: ['admin', 1]
};
menber.level[0] = "moderator";
menber.level.push('salut');
console.log(menber.level);
//type object
let car = {
    color: 'red',
    date: 2020,
    speed: 500
};
let bus;
let cars = {
    color: 'red',
    date: 2020,
    speed: 500
};
console.log(cars.color);
//Partie 2- Enum
/*
ADMIN = 0
MODERATOR = 1
SUPPORT = 2
USER_READ_ONLY = 3
*/
var Level;
(function (Level) {
    Level[Level["ADMIN"] = 0] = "ADMIN";
    Level[Level["MODERATOR"] = 1] = "MODERATOR";
    Level[Level["SUPPORT"] = 2] = "SUPPORT";
    Level[Level["USER_READ_ONLY"] = 3] = "USER_READ_ONLY";
})(Level || (Level = {}));
const users = {
    pseudo: "Batman",
    level: Level.SUPPORT
};
if (users.level === Level.SUPPORT) {
    console.log(`Bienvenue ${users.pseudo}
        Vous travaillez au service support ${Level.SUPPORT}`);
}
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
let colorName = Color[2];
console.log(colorName); //green
colorName = Color[6];
console.log(colorName); //blue
//type any
let userInfos = {
    name: 'bon',
    pseudo: 12,
};
//type unknown
//let inputData : unknown; //un peu similaire a any
let inputData; //unknown + verification
inputData = 20;
console.log(typeof inputData); //boolean
let inputAge;
if (typeof inputData === 'number') {
    inputAge = inputData; //ok
    console.log(typeof inputAge); //number
}
//inputAge = inputData; //ok 
//console.log(typeof inputAge); ///boolean
//type void 
function gift(age) {
    const result = age + 3;
    return result;
    //return result.toString();
}
console.log(typeof gift(20)); //string
// function clgData(arg : any){
//     console.log(`Résultat: ${arg}`); //pas de return 
// }
// clgData(gift(20)); 
function clgData() {
    console.log("hello world"); //pas de return 
}
console.log(clgData()); //Undefined //valeur en javascript
//les Functions generiques
//let ages : Function; //fonction generiques
let ages; //functions specifiques (param : type) => return type
ages = gift; //ok
console.log(ages(20)); //23
//function avec parametre facultative
function buildName(fname, lname) {
    if (lname) {
        return fname + " " + lname;
    }
    else {
        return fname;
    }
}
let result = buildName("chou"); //rendre le 2eme param facultative
console.log(result);
function buildF(firstName = "will", lastName) {
    return firstName + " " + lastName;
}
let result2 = buildF("bob", "adams");
console.log(result2);
let result3 = buildF(undefined, "bob");
console.log(result3); // will bob
//Paramètre Rest
const divColors = document.getElementById("colors");
let coler = function (args1, ...restofColors) {
    console.log(typeof arguments); //Object
    console.log(arguments.length); //3
    console.log(restofColors);
    // for( let i = 0; i < arguments.length; i++){
    //     console.log(arguments[i]);
    // }
    const h1 = document.createElement('H1');
    h1.innerHTML = `Titre: ${args1}`;
    divColors === null || divColors === void 0 ? void 0 : divColors.appendChild(h1);
    const ul = document.createElement('ul');
    for (let i in restofColors) {
        //console.log(arguments[i]);
        let li = document.createElement('li');
        li.innerHTML = restofColors[i];
        ul.appendChild(li);
    }
    divColors === null || divColors === void 0 ? void 0 : divColors.appendChild(ul);
};
coler("Liste 1", "green", "red", "orange");
coler("List 2", "Blue", "Black", "Pink");
function buildNam(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
//let buildNameFun = buildNam;
let buildNameFun = buildNam;
function sum(sum1, ...sum2) {
    return sum1 + sum2;
}
buildNameFun = sum;
//callback function 
// function giftt(age: number){
//     return age + 3;
// }
function giftt(age, som) {
    const memberAge = age + 3;
    som(memberAge);
}
giftt(40, (num) => console.log(num));
//Union Types
function concatenate(args1, arg2) {
    let result;
    if (typeof args1 === "number" && typeof arg2 === "number") {
        result = args1 + arg2; //number 30
    }
    else if (typeof args1 === "string" && typeof arg2 === "string") {
        result = args1 + arg2; //string
    }
    else {
        result = args1.toString() + arg2.toString(); //string
    }
    return result;
}
console.log(concatenate(10, 20)); //30 (number)
console.log(concatenate("Hello", "World")); //HelloWorld
console.log("Hello", 20); //Hello20
console.log(concatenate(20, "Hello")); //20Hello
let data;
let userId;
data = "Hello";
const welcome = (username) => {
    console.log("Bienvenue", username);
};
welcome("Dupont");
const getProfilData = (user) => {
    console.log(`
        id: ${user.id}
        username: ${user.userName}
    `);
};
getProfilData({ id: 232343, userName: "Dupond" });
let productDetails = {
    name: "Formation PHP",
    price: 99
};
const invoice = (productName, user) => {
    console.log(`
        Produit: ${productName.name}
        Prix: ${productName.price}
        Id Client: ${user.id}
        Nom du Client: ${user.userName}
    `);
};
invoice(productDetails, { id: 232343, userName: "Dupond" });
function total(arg1, arg2, totalversion) {
    let result;
    if (totalversion === "getstringValue") {
        result = arg1.toString() + arg2.toString(); //string
    }
    else if (totalversion === "getSquare") {
        const val = arg1 + arg2;
        //result = val ** 2;     //puissance 2 via ES6
        result = Math.pow(val, 2); //puissance 2
    }
    else {
        result = arg1 + arg2; //number
    }
    return result;
}
const totalOne = total(20, 10, "getstringValue"); //if not e at the end then TS error
console.log(totalOne); //30
const totalTwo = total(20, 10, "getSquare");
console.log(totalTwo); //30 * 30 = 900
function format(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else if (typeof value === "number") {
        return value.toString();
    }
    else {
        const verifyCases = value; //ts error
    }
}
function throwError(errMsg) {
    throw new Error(errMsg); //stop
}
function getTotal(arg) {
    if (arg < 5) {
        return throwError("attention , le total < 5");
    }
    else if (arg === 5) {
        console.log(arg); //pas de return, Ts never
    }
    else {
        return arg + 10; //TS getTotal => Number
    }
}
//types null vs undefined
console.log(undefined === null); //false
console.log(undefined == null); //true //opérateur d'égalité faible
//typeof  
console.log(typeof undefined); //undefined
console.log(typeof null); //object
// !
console.log(null); //true
console.log(!null); //true car la valeur existe
console.log(!!null); //false
//return undefined |null
const myFunc = function foo(arg) {
    return arg;
};
const res = myFunc("Hello");
if (res != null) {
    console.log(typeof res); //string
}
//Type assertions
// avec la synthaxe AS
let someValue = "this is a string";
//let strlenght = (someValue as string).length; //avec le AS
let strlenght = someValue.length; //avec angle-Braket
console.log(strlenght); //16
//const firstName = document.getElementById('firstName') as HTMLInputElement; ou encore voir en bas
//console.log(firstName.value);  //string
const agees = document.getElementById('age');
//const firstName = <HTMLInputElement>document.getElementById('firstName'); ou encore 
const firstName = document.getElementById('firstName');
let inputValue = firstName.value;
//let inputValue = (<HTMLInputElement> firstName).value;
console.log(typeof inputValue); //string
//console.log(typeof firstName.value);
//-------------------Type Assertions (suite) !
const form = document.querySelector("#signupForm"); //element | null
const firstname = document.getElementById('firstName');
const ag = document.getElementById('age');
const gender = document.getElementById("gender");
//console.log(form.children);
//Validation form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(firstname.value, ag.valueAsNumber, gender.value);
});
//--------------------------les classes
