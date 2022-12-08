/*function setterLog(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    //console.log(target);  //prototype de la class
    //console.log(propertyKey);  // setColor
    //console.log(descriptor); // propriétés du descriptor
}


function infosLog(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log(target);  //prototype de la class
    console.log(propertyKey);  // setColor
    console.log(descriptor); // propriétés du descriptor
}

class Bagnol{

    brand: string;
    private color: string;

    constructor(b: string, c: string){
        this.brand = b;
        this.color = c;
    }

    @setterLog
    setColor(color: string){
        this.color = color;
    }

    @infosLog
    infos(){
        return `Marque: ${this.brand} | Couleur: ${this.color}`;
    }
}

const kia = new Bagnol('opel', "red");
console.log(kia.infos());  //infos car
kia.infos = function(){
    return "Hello";
}

console.log(kia.infos()); //hello
*/
function readonly(value: boolean){
    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor)
        {
            descriptor.writable = value;
        }
}
/*function readonly(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    //console.log(descriptor);
    descriptor.writable = false;
}*/
function logParam(target: any, name: string, position: number){
    //console.log(target);  //prototype de la classe
   // console.log(name);  //loginMsg
    //console.log(position);  //0
    console.log("je suis dans le décorateur du paramètre");
}
function methodLog(target: any, name: string, descriptor: PropertyDescriptor){
    console.log("Je suis dans le décorateur de la méthode ");
}   
class Homme {
    constructor(public age: number, public eyes: string, private hair: string){

    }

    @readonly(true)
    getHairColor(){
        return this.hair;
    }

    @methodLog
    loginMsg(minAge: number, @logParam textOne: string, textTwo: string){
        console.log(this.age);
        if(this.age > 17){
            return textOne;
        }
        return textTwo;
    }
}

 const per = new Homme(30,'blue', 'black');
 //per.eyes = "brown";
 console.log(per.loginMsg(18,"Inscription autorisée", "Inscription refusée"));
