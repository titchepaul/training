function bind(target: any, name: string, descriptor: PropertyDescriptor){
   // console.log(descriptor.value);
   const orgMethod = descriptor.value;
   let newDescriptor: PropertyDescriptor;
   newDescriptor = {
        get(){
            return orgMethod.bind(this);
        }
   }
   return newDescriptor;
}


class Man {

    userName: string;

    constructor(name: string){
        this.userName = name;
    }

    @bind
    getName(){
        //console.log(this.userName);
        console.log(this.userName);  //Steve Smith
        console.log(this); //Man
    }
}

const btn = document.querySelector('button')!;
const steve = new Man("Steve Smith");
btn.addEventListener('click', () => steve.getName());  //Steve Smith, 
// le (this) prendra l'objet click et non l'objet de la classe, pour qu'il le fasse il faut passer par bind(this)
