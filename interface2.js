var Person = /** @class */ (function () {
    function Person(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    Person.prototype.talk = function () {
        return "Je m'appele ".concat(this.nom);
    };
    return Person;
}());
var Alien = /** @class */ (function () {
    function Alien(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    Alien.prototype.telepathy = function () {
        return "je m'appelle ".concat(this.nom, ". je suis un ado de ").concat(this.age);
    };
    return Alien;
}());
var forms = document.getElementById('signupForm');
var firstN = document.getElementById('firstName');
var agess = document.getElementById('age');
var species = document.getElementById('species');
forms.addEventListener('submit', function (e) {
    e.preventDefault();
    var humamUsers;
    var alienUsers;
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
