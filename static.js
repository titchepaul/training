var Personnen = /** @class */ (function () {
    function Personnen(name) {
        this.name = name;
    }
    Personnen.talk = function () {
        //console.log('je suis une personne '+ Personnen.age);
        console.log('je suis une personne ' + this.age);
    };
    Personnen.age = 30;
    return Personnen;
}());
var person = new Personnen("toto");
Personnen.talk();
//Personnen.talk();
//Personnen.age;
//person.talk;
//Personnen.prototype.talk();  //je suis une personne
