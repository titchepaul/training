
//Decorateurs Factories

function Component(id: string){
    return function(target: any){
        //console.log(constructor);
        //console.log(hw); 
        const el = document.getElementById(id)!;  //ne tqt pas ce dernier existe
        const h1 = document.createElement('h1');
        //h1.innerHTML = hw;
        const objCar = new target("Ford", "rouge");
        //console.log(objCar);
        h1.innerHTML = objCar.carDetails();
        el.append(h1);
    }
}

//@Test("hello world", 'title')
@Component('title')
class Care {

    constructor(private n: string, private c: string){
    }
    carDetails(){
            return `Marque: ${this.n} | Couleur: ${this.c}`
    }
    
}
const forde = new Care("Ford", "rouge");
console.log(forde.carDetails());
