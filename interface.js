var Moth = /** @class */ (function () {
    function Moth(n, e) {
        this.name = n;
        this.eyes = e;
    }
    Moth.prototype.speak = function () {
        console.log("Je me présente, je m'appelle " + this.name);
    };
    return Moth;
}());
var henri = new Moth("Henri ", 2);
console.log(henri);
henri.speak();
var helene;
helene = {
    name: "Helene",
    eyes: 2,
    speak: function (a) {
        return a + ' ' + this.name;
    }
};
var talkingPerson = function (a, b) {
    return a.speak(b);
};
var resultat = talkingPerson(helene, "Bonjour");
console.log(resultat);
//console.log(helene);
