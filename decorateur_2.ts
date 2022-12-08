function PropertyLog(target: any, propertyKey: string){
    console.log(target);
    console.log(propertyKey);
}

class Caar{

    @PropertyLog
    brand: string;
    color: string;

    constructor(b: string, c: string){
        this.brand = b;
        this.color = c;
    }

    getInfos(){
        return `Marque: ${this.brand} | Couleur: ${this.color}`;
    }
}

const opel = new Caar("opel", "red");
console.log(opel);