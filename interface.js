"use strict";
class Moth {
    constructor(n, e) {
        this.name = n;
        this.eyes = e;
    }
    speak() {
        console.log("Je me présente, je m'appelle " + this.name);
    }
}
let henri = new Moth("Henri ", 2);
console.log(henri);
henri.speak();
let helene;
helene = {
    name: "Helene",
    eyes: 2,
    speak(a) {
        return a + ' ' + this.name;
    }
};
const talkingPerson = (a, b) => {
    return a.speak(b);
};
const resultat = talkingPerson(helene, "Bonjour");
console.log(resultat);
//console.log(helene);
