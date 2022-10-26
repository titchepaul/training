class Personnen {

    static readonly age: number = 30;

    constructor(private name: string){}

    static talk(){
        //console.log('je suis une personne '+ Personnen.age);
        console.log('je suis une personne '+ this.age);
    }
}

const person = new Personnen("toto");
Personnen.talk();
//Personnen.talk();
//Personnen.age;
//person.talk;
//Personnen.prototype.talk();  //je suis une personne