//Record<keys, Type>
//Record<Name, SuperHeros>
var heros = {
    Batman: {
        name: "Batman",
        power: 60,
        marvel: false,
        dcComics: true
    },
    Spiderman: {
        name: "Spiderman",
        power: 60,
        marvel: true,
        dcComics: false
    },
    Superman: {
        name: "Superman",
        power: 60,
        marvel: false,
        dcComics: true
    }
};
console.log(heros);
heros.Spiderman.marvel && console.log("".concat(heros.Spiderman.name, " est Mavel"));
