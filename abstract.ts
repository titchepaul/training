abstract class Po {

    constructor(public name: string){}

    walk(){
    
        console.log('je marche');
    }

    abstract updateName(name: string): void;

}

class Child extends Po{
    updateName(name: string): void {
        this.name = name;
        console.log(this.name);
    }
    
}

let mario = new Child('Mario');
mario.updateName("Spirou");
mario.walk();