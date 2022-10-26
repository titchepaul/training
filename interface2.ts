interface HumanSounds{
    talk(): string;
}
interface AlienSounds{
    telepathy(): string;
}
class Person implements HumanSounds {
    constructor(readonly nom: string, private age: number){

    }
    talk(){
        return `Je m'appele ${this.nom}`;
    }
}
class Alien{
    constructor(readonly nom: string, private age: number){}
    telepathy(){
        return `je m'appelle ${this.nom}. je suis un ado de ${this.age}`;
    }
}

const  forms = document.getElementById('signupForm') as HTMLFormElement;
const  firstN = document.getElementById('firstName') as HTMLInputElement;
const  agess = document.getElementById('age') as HTMLInputElement;
const  species = document.getElementById('species') as HTMLSelectElement;

forms.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let humamUsers: HumanSounds;
    let alienUsers: AlienSounds;

    if(species.value === "human"){

        humamUsers = new Person(firstN.value, agess.valueAsNumber);
        console.log(humamUsers,humamUsers.talk());
    }else{
       alienUsers  = new Alien(firstN.value, agess.valueAsNumber);
       console.log(alienUsers, alienUsers.telepathy());
    }
} )

/*let homer = new Person("Homer", 43); //Person
let roger = new Alien("Roger", 1500);
let humans: HumanSounds; //type interface HumanSounds
humans = homer;  //OK
console.log(roger.telepathy());

let humanMembers: HumanSounds[];
humanMembers = [];
humanMembers.push(homer);
console.log(humanMembers);*/