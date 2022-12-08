"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*function setterLog(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    //console.log(target);  //prototype de la class
    //console.log(propertyKey);  // setColor
    //console.log(descriptor); // propriétés du descriptor
}


function infosLog(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log(target);  //prototype de la class
    console.log(propertyKey);  // setColor
    console.log(descriptor); // propriétés du descriptor
}

class Bagnol{

    brand: string;
    private color: string;

    constructor(b: string, c: string){
        this.brand = b;
        this.color = c;
    }

    @setterLog
    setColor(color: string){
        this.color = color;
    }

    @infosLog
    infos(){
        return `Marque: ${this.brand} | Couleur: ${this.color}`;
    }
}

const kia = new Bagnol('opel', "red");
console.log(kia.infos());  //infos car
kia.infos = function(){
    return "Hello";
}

console.log(kia.infos()); //hello
*/
function readonly(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.writable = value;
    };
}
/*function readonly(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    //console.log(descriptor);
    descriptor.writable = false;
}*/
function logParam(target, name, position) {
    //console.log(target);  //prototype de la classe
    // console.log(name);  //loginMsg
    //console.log(position);  //0
    console.log("je suis dans le décorateur du paramètre");
}
function methodLog(target, name, descriptor) {
    console.log("Je suis dans le décorateur de la méthode ");
}
class Homme {
    constructor(age, eyes, hair) {
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
    }
    getHairColor() {
        return this.hair;
    }
    loginMsg(minAge, textOne, textTwo) {
        console.log(this.age);
        if (this.age > 17) {
            return textOne;
        }
        return textTwo;
    }
}
__decorate([
    readonly(true)
], Homme.prototype, "getHairColor", null);
__decorate([
    methodLog,
    __param(1, logParam)
], Homme.prototype, "loginMsg", null);
const per = new Homme(30, 'blue', 'black');
//per.eyes = "brown";
console.log(per.loginMsg(18, "Inscription autorisée", "Inscription refusée"));
