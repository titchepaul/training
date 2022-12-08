"use strict";
class Person {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    talk() {
        return `Je m'appele ${this.nom}`;
    }
}
class Alien {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    telepathy() {
        return `je m'appelle ${this.nom}. je suis un ado de ${this.age}`;
    }
}
const forms = document.getElementById('signupForm');
const firstN = document.getElementById('firstName');
const agess = document.getElementById('age');
const species = document.getElementById('species');
forms.addEventListener('submit', (e) => {
    e.preventDefault();
    let humamUsers;
    let alienUsers;
    if (species.value === "human") {
        humamUsers = new Person(firstN.value, agess.valueAsNumber);
        console.log(humamUsers, humamUsers.talk());
    }
    else {
        alienUsers = new Alien(firstN.value, agess.valueAsNumber);
        console.log(alienUsers, alienUsers.telepathy());
    }
});
/*let homer = new Person("Homer", 43); //Person
let roger = new Alien("Roger", 1500);
let humans: HumanSounds; //type interface HumanSounds
humans = homer;  //OK
console.log(roger.telepathy());

let humanMembers: HumanSounds[];
humanMembers = [];
humanMembers.push(homer);
console.log(humanMembers);*/ 
