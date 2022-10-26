//heritage, polymorphisme
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mother = /** @class */ (function () {
    function Mother(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    Mother.prototype.speak = function () {
        console.log("je suis ".concat(this.name, " et j'ai des cheveux ").concat(this.hair));
    };
    return Mother;
}());
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Children.prototype.speak = function () {
        console.log("I am  ".concat(this.name, " and I have ").concat(this.hair, " hair."));
    };
    Children.prototype.speakMotherLang = function () {
        _super.prototype.speak.call(this);
    };
    return Children;
}(Mother));
var Random = /** @class */ (function () {
    function Random(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    return Random;
}());
var person1 = new Mother("Rhea", "Marron", 2); //type Mother
var person2 = new Children("Déméter", "Marron", 2); //Type Children
//console.log(person1);
//person1.speak();
//const person2 = new Children("Déméter", "Marron",2); //Type Children
//console.log(person2);
//person2.speak();
//person2.speakMotherLang();
//person2.speak();
//let person3: Mother = new Random("Tom","Marron", 2);
