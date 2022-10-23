//export{};
//js type dynanmique 
//ts type stricte

const pi = Math.PI;
console.log(pi)

const sum1 = (val1: number, val2: number) => {

     if(typeof val1 == 'number' && typeof val2 == 'number'){
            return val1 + val2;
        }else{
            throw new Error("impossible à calculer ");
    }
}
//sum1(2,2)
console.log(sum1(2,2))
// const sum2 = (val1 : number, val2 : number) => {
//     return val1 + val2;
// }

//les tableaux -  Arrays
//let colors: string[] = ['red','blue', 'green','orange'];
//let colors: Array<string> = ['red','blue', 'green','orange'];
let colors = ['red','blue', 'green','orange'];
let strNumArray = ['red', 9,false]; //via inference

//Type tuple 
let x : [string, number];
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

const menber:{
    level: [string, number]
} = {
    level : ['admin', 1]
}
menber.level[0] = "moderator";
menber.level.push('salut');
console.log(menber.level);

//type object
let car = {  //objet
    color: 'red',
    date: 2020,
    speed: 500
}
let bus : { //type d'object
    color: string;
    date: number;
    speed: number;
}
let cars :{
    color: string;
    date: number;
    speed: number;
} = {
    color: 'red',
    date: 2020,
    speed: 500
}
console.log(cars.color);

//Partie 2- Enum
/*
ADMIN = 0
MODERATOR = 1 
SUPPORT = 2
USER_READ_ONLY = 3
*/
enum Level {
    ADMIN, //0
    MODERATOR, //1
    SUPPORT, //2
    USER_READ_ONLY, //3
}
const users = {
    pseudo: "Batman",
    level: Level.SUPPORT
}

if(users.level === Level.SUPPORT ){
    console.log(`Bienvenue ${users.pseudo}
        Vous travaillez au service support ${Level.SUPPORT}`
    )
}
enum Color {
    Red = 1,
    Green,
    Blue = 6,
}

let c = Color.Green;
console.log(c);
let colorName : string = Color[2];
console.log(colorName); //green
colorName = Color[6];
console.log(colorName); //blue

//type any
let userInfos :{
    name : any;
    pseudo : any;
} = {
    name : 'bon',
    pseudo : 12,
}

//type unknown
//let inputData : unknown; //un peu similaire a any
let inputData : unknown; //unknown + verification
inputData = 20;
console.log(typeof inputData); //boolean

let inputAge : number; 

if(typeof inputData === 'number'){
    inputAge = inputData;  //ok
    console.log(typeof inputAge); //number
}
//inputAge = inputData; //ok 
//console.log(typeof inputAge); ///boolean

//type void 
function gift(age : number){
    const result = age + 3;
    return result;
    //return result.toString();
}
console.log(typeof gift(20)); //string

// function clgData(arg : any){
//     console.log(`Résultat: ${arg}`); //pas de return 
// }
// clgData(gift(20)); 

function clgData(){
    console.log("hello world"); //pas de return 
}
console.log(clgData()); //Undefined //valeur en javascript

//les Functions generiques

//let ages : Function; //fonction generiques
let ages : (num : number) => number;   //functions specifiques (param : type) => return type
ages = gift;   //ok
console.log(ages(20)); //23

//function avec parametre facultative

function buildName(fname: string, lname ?: string){
  if(lname){
    return fname + " "+ lname;
  }else{
    return fname;
  }
}
let result = buildName("chou"); //rendre le 2eme param facultative
console.log(result);

function buildF(firstName = "will", lastName : string){
    return firstName + " "+ lastName;
}
let result2 = buildF("bob","adams");
console.log(result2);
let result3 = buildF(undefined,"bob");
console.log(result3); // will bob

//Paramètre Rest

const divColors = document.getElementById("colors");

let coler = function(args1 : string, ...restofColors: string[]){
    console.log(typeof arguments); //Object
    console.log(arguments.length); //3
    console.log(restofColors);

    // for( let i = 0; i < arguments.length; i++){
    //     console.log(arguments[i]);
    // }
    const h1 = document.createElement('H1');
    h1.innerHTML = `Titre: ${args1}`;
    divColors?.appendChild(h1);

    const ul = document.createElement('ul');

    for (let i in restofColors){
        //console.log(arguments[i]);
        let li = document.createElement('li');
        li.innerHTML = restofColors[i];
        ul.appendChild(li);
    }
    divColors?.appendChild(ul);
}
coler("Liste 1","green", "red", "orange");
coler("List 2", "Blue", "Black", "Pink");

function buildNam(firstName: string, ...restOfName: string[]){
    return firstName + " " + restOfName.join(" ");
}
//let buildNameFun = buildNam;
let buildNameFun : (fname: string, ...rest: string[]) => string = buildNam;

function sum(sum1: string, ...sum2: string[]){
    return sum1 + sum2;
}
buildNameFun = sum;

//callback function 
// function giftt(age: number){
//     return age + 3;
// }
function giftt(age: number, som: (arg: number) => void){
    const memberAge  = age + 3;
    som(memberAge);
}
giftt(40, (num) => console.log(num));

//Union Types
function concatenate(args1 : number | string, arg2: number | string){
    let result 
    if(typeof args1 === "number" && typeof arg2 === "number"){
        result = args1 + arg2; //number 30
    }else if(typeof args1 === "string" && typeof arg2 === "string"){
        result = args1 + arg2; //string
    }else{
        result = args1.toString() + arg2.toString(); //string
    }
    return result;
}
console.log(concatenate(10,20)); //30 (number)
console.log(concatenate("Hello", "World")); //HelloWorld
console.log("Hello", 20); //Hello20
console.log(concatenate(20, "Hello")); //20Hello

//Types Alias
type NumStr = number | string;
let data : NumStr;
let userId: NumStr;

data = "Hello";
const welcome = (username: NumStr) => {
    console.log("Bienvenue", username);
}
welcome("Dupont");
const getProfilData = (user : {id: number, userName: NumStr}) => {
    console.log(`
        id: ${user.id}
        username: ${user.userName}
    `)
}

getProfilData({id : 232343, userName: "Dupond"});

type objIdUser = {
    id: number,
    userName: NumStr
}

type objInvoice = {
    name: string,
    price: number
}

let productDetails = {
    name : "Formation PHP",
    price: 99
}

const invoice = (productName: objInvoice, user: objIdUser) => {
    console.log(`
        Produit: ${productName.name}
        Prix: ${productName.price}
        Id Client: ${user.id}
        Nom du Client: ${user.userName}
    `);
}
invoice(productDetails, {id:232343, userName: "Dupond"});

//Literal type
type GetResultFormat = "getstringValue" | "getSquare";
function total(arg1: number, arg2: number, totalversion: GetResultFormat){
    let result;
    if(totalversion === "getstringValue"){
        result = arg1.toString() + arg2.toString(); //string
    }else if(totalversion === "getSquare"){
        const val = arg1 + arg2;
        //result = val ** 2;     //puissance 2 via ES6
        result = Math.pow(val, 2);  //puissance 2
    }else{
        result = arg1 + arg2;  //number
    }
    return result;
}
const totalOne = total(20,10, "getstringValue"); //if not e at the end then TS error
console.log(totalOne); //30
const totalTwo = total(20,10, "getSquare");
console.log(totalTwo); //30 * 30 = 900

//Type never (cas rares)
type AcceptedValues = string | number;

function format(value: AcceptedValues){

    if( typeof value === "string"){
        return value.length;
    }else if(typeof value === "number"){
        return value.toString();
    }else{
        const verifyCases: never = value;  //ts error
    }
}
function throwError(errMsg: any): never {
    throw new Error(errMsg); //stop
}
function getTotal(arg: number){
    if(arg < 5){
        return throwError("attention , le total < 5");
    }else if(arg === 5){
        console.log(arg); //pas de return, Ts never
    }else{
        return arg + 10; //TS getTotal => Number
    }
}

//types null vs undefined
console.log(undefined === null); //false
console.log(undefined == null); //true //opérateur d'égalité faible
//typeof  
console.log(typeof undefined);  //undefined
console.log(typeof null); //object
// !
console.log(null); //true
console.log(!null);  //true car la valeur existe
console.log(!!null); //false
//return undefined |null
const myFunc = function foo(arg: string|null|undefined){
    return arg;
}
const res = myFunc("Hello");
if(res != null){
    console.log(typeof res);  //string
}

//Type assertions
// avec la synthaxe AS
let someValue: unknown = "this is a string";
//let strlenght = (someValue as string).length; //avec le AS
let strlenght = (<string>someValue).length; //avec angle-Braket
console.log(strlenght);   //16

//const firstName = document.getElementById('firstName') as HTMLInputElement; ou encore voir en bas
//console.log(firstName.value);  //string
const agees = document.getElementById('age') as HTMLInputElement;
//const firstName = <HTMLInputElement>document.getElementById('firstName'); ou encore 
const firstName = document.getElementById('firstName');
let inputValue = (firstName as HTMLInputElement).value;
//let inputValue = (<HTMLInputElement> firstName).value;
console.log(typeof inputValue); //string
//console.log(typeof firstName.value);

//-------------------Type Assertions (suite) !
const form = document.querySelector("#signupForm") as HTMLFormElement; //element | null
const firstname = document.getElementById('firstName') as HTMLInputElement;
const ag = document.getElementById('age') as HTMLInputElement;
const gender = document.getElementById("gender") as HTMLSelectElement;
//console.log(form.children);

//Validation form
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(firstname.value, ag.valueAsNumber, gender.value)
})

//--------------------------les classes


