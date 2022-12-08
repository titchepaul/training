"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function bind(target, name, descriptor) {
    // console.log(descriptor.value);
    const orgMethod = descriptor.value;
    let newDescriptor;
    newDescriptor = {
        get() {
            return orgMethod.bind(this);
        }
    };
    return newDescriptor;
}
class Man {
    constructor(name) {
        this.userName = name;
    }
    getName() {
        //console.log(this.userName);
        console.log(this.userName); //Steve Smith
        console.log(this); //Man
    }
}
__decorate([
    bind
], Man.prototype, "getName", null);
const btn = document.querySelector('button');
const steve = new Man("Steve Smith");
btn.addEventListener('click', () => steve.getName()); //Steve Smith, 
// le (this) prendra l'objet click et non l'objet de la classe, pour qu'il le fasse il faut passer par bind(this)
