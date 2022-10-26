class Moth {
    name: string;
    eyes: number;

    constructor(n: string, e: number){
        this.name = n;
        this.eyes = e;
    }

    speak(){
        console.log("Je me présente, je m'appelle "+this.name);
    }
}
interface Person{
    name: string;
    eyes?: number;
    speak(a: string): string; //type: string + return string
}

let henri = new Moth("Henri ",2);
console.log(henri);
henri.speak();

let helene: Person; 
helene = {
    name: "Helene",
    eyes: 2,
    speak(a: string): string{
        return a + ' '+ this.name;
    }
};
const talkingPerson = (a: Person, b: string) => {
    return a.speak(b);
}
const resultat = talkingPerson(helene, "Bonjour");
console.log(resultat);
//console.log(helene);
