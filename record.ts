//Record<keys, Type>

interface SuperHeros {
    name: string;
    power: number ;
    marvel: boolean;
    dcComics: boolean;
}

type Name = "Batman" | "Spiderman" | "Superman";

//Record<Name, SuperHeros>
 let heros: Record<Name,SuperHeros> = {
    Batman: {
        name: "Batman",
        power: 60 ,
        marvel: false,
        dcComics: true,
    },
    Spiderman: {
        name: "Spiderman",
        power: 60 ,
        marvel: true,
        dcComics: false,
    },
    Superman: {
        name: "Superman",
        power: 60 ,
        marvel: false,
        dcComics: true,
    }
 }
 console.log(heros);
heros.Spiderman.marvel && console.log(`${heros.Spiderman.name} est Mavel`);