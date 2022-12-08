"use strict";
/*
function chageArtist(artist: string, id: string){
    return function<T extends { new (...args: any[]): {age: number} }>(constructor: T){
        return class extends constructor{
            /*public age: number;
            public eyes: string;
            public artist: string = artist;
            loginMsg(){
                return "Hello paul";
            }
            
           constructor(...args: any[]){
                super();
                const el = document.getElementById(id) as HTMLDivElement;
                const h1 = document.createElement('h1');
                h1.innerText = artist;
                el.append(h1);
                console.log(this.age);
           }
        }
    }
}*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*function methodLog(target: any, name: string, descriptor: PropertyDescriptor){
    //console.log("Je suis dans le décorateur de la méthode ");
}
*/
function changeArtist(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.newProperty = 'Toto';
        }
    };
}
let Homm = class Homm {
    constructor(age, eyes, artist) {
        this.age = age;
        this.eyes = eyes;
        this.artist = artist;
    }
    loginMsg(minAge, textOne, textTwo) {
        console.log(this.age);
        if (this.age > 17) {
            return textOne;
        }
        return textTwo;
    }
};
Homm = __decorate([
    changeArtist
], Homm);
const pers = new Homm(40, 'blue', 'Picasso');
console.log(pers);
//console.log(`${pers.loginMsg(18,"Ok","refusée")}`);
//per.eyes = "brown";
//console.log(per.loginMsg(18,"Inscription autorisée", "Inscription refusée"));
