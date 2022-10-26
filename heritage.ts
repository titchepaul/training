//heritage, polymorphisme

class Mother {
    name: string;
    hair: string;
    eyes: number;

    constructor(n: string, h: string, e: number){
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    speak(){
        console.log(`je suis ${this.name} et j'ai des cheveux ${this.hair}`);
    }
}

class Children extends Mother{
    speak(){
        console.log(`I am  ${this.name} and I have ${this.hair} hair.`);
    }
    speakMotherLang(){
        super.speak();
    }
}

class Random{

    name: string;
    hair: string;
    eyes: number;

    constructor(n: string, h: string, e: number){
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
}

const person1 = new Mother("Rhea", "Marron", 2); //type Mother
const person2: Mother = new Children("Déméter", "Marron",2); //Type Children
//console.log(person1);
//person1.speak();

//const person2 = new Children("Déméter", "Marron",2); //Type Children
//console.log(person2);
//person2.speak();
//person2.speakMotherLang();
//person2.speak();

//let person3: Mother = new Random("Tom","Marron", 2);