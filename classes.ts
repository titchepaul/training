//Classes(public, private,protected, readOnly )

class Mother_ {
    /*
    private name: string;
    private hair: string;
    private eyes: number; */

    constructor(public name: string, private hair: string, protected eyes: number){
        /*this.name = n;
        this.hair = h;
        this.eyes = e;*/
    }

    private speak(){
        console.log(`je suis ${this.name} et j'ai des cheveux ${this.hair}`);
    }

    //getteur
    getName(){
        return this.name;
    }

    getHair(){
        return this.hair;
    }
    //setteur
    setHairColor(newColor: string){
        this.hair = newColor;
    }

}

class Children_ extends Mother_{
    getData(){
        /*
         Public ok
         Private: mother_ (No)
         Protected : ok
        */
        return this.eyes;
    }
}

const person1_ = new Mother_("Rhea", "Marron", 2); //type Mother_
const person2_ = new Children_("Déméter", "Black",2); //Type Children_
console.log(person2_.getData());
//person1_.setHairColor("Black");
//console.log(person1_.getHair());
