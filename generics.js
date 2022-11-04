// generics
var couleurs = ["red", "blue", "green"]; //: string
var couleurs2 = []; //string[]
/*function identity(arg: number): number{
    return arg;
}
console.log(identity(200));  //200

function identity2(arg: any): any{
    return arg;
}
console.log(identity2(200)); //200
console.log(identity2("hello")); //hello
console.log(identity2(true)); //true
*/
/*function identity<T>(arg: T): T{
    return arg;
}
let output1 = identity("hello"); //: string
let output2 = identity(200); //number
let output3 = identity(false); //: boolean
let output4 = identity({title: "hello world"}) //: {title: string};

console.log(typeof output1);
console.log(typeof output2);
console.log(typeof output3);
console.log(typeof output4);
*/
function identity(arg) {
    return arg;
}
var output4 = identity({ title: "hello world" }); //: {title: string};
console.log(typeof output4);
var objOne = { name: "Bart" };
var objTwo = { age: 8 };
function objInArray(n, a) {
    var data = [];
    data.push(n, a);
    return data;
}
var user = objInArray(objOne, objTwo);
console.log(user);