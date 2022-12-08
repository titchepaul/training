
/*
function chageArtist(artist: string, id: string){
    return function<T extends { new (...args: any[]): {age: number} }>(constructor: T){
        return class extends constructor{
            /*public age: number;
            public eyes: string;
            public artist: string = artist;
            loginMsg(){
                return "Hello paul";
            }
            
           constructor(...args: any[]){
                super();
                const el = document.getElementById(id) as HTMLDivElement;
                const h1 = document.createElement('h1');
                h1.innerText = artist;
                el.append(h1);
                console.log(this.age);
           }
        }
    }
}*/

/*function methodLog(target: any, name: string, descriptor: PropertyDescriptor){
    //console.log("Je suis dans le décorateur de la méthode ");
}   
*/

function changeArtist<T extends { new (...args: any[]): {} }>(constructor: T){
    return class extends constructor{
       newProperty = 'Toto';
    }
}
@changeArtist
class Homm {
    constructor(public age: number, public eyes: string, public artist: string){

    }
   
    loginMsg(minAge: number, textOne: string, textTwo: string){
        console.log(this.age);
        if(this.age > 17){
            return textOne;
        }
        return textTwo;
    }
}

 const pers = new Homm(40,'blue', 'Picasso');
 console.log(pers);
 //console.log(`${pers.loginMsg(18,"Ok","refusée")}`);
 //per.eyes = "brown";
 //console.log(per.loginMsg(18,"Inscription autorisée", "Inscription refusée"));