"use strict";
class Personnen {
    constructor(name) {
        this.name = name;
    }
    static talk() {
        //console.log('je suis une personne '+ Personnen.age);
        console.log('je suis une personne ' + this.age);
    }
}
Personnen.age = 30;
const person = new Personnen("toto");
Personnen.talk();
//Personnen.talk();
//Personnen.age;
//person.talk;
//Personnen.prototype.talk();  //je suis une personne
