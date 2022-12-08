"use strict";
class Po {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('je marche');
    }
}
class Child extends Po {
    updateName(name) {
        this.name = name;
        console.log(this.name);
    }
}
let mario = new Child('Mario');
mario.updateName("Spirou");
mario.walk();
