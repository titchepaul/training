//Classes(public, private,protected, readOnly )
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
var Mother_ = /** @class */ (function () {
    /*
    private name: string;
    private hair: string;
    private eyes: number; */
    function Mother_(name, hair, eyes) {
        this.name = name;
        this.hair = hair;
        this.eyes = eyes;
        /*this.name = n;
        this.hair = h;
        this.eyes = e;*/
    }
    Mother_.prototype.speak = function () {
        console.log("je suis ".concat(this.name, " et j'ai des cheveux ").concat(this.hair));
    };
    //getteur
    Mother_.prototype.getName = function () {
        return this.name;
    };
    Mother_.prototype.getHair = function () {
        return this.hair;
    };
    //setteur
    Mother_.prototype.setHairColor = function (newColor) {
        this.hair = newColor;
    };
    return Mother_;
}());
var Children_ = /** @class */ (function (_super) {
    __extends(Children_, _super);
    function Children_() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Children_.prototype.getData = function () {
        /*
         Public ok
         Private: mother_ (No)
         Protected : ok
        */
        return this.eyes;
    };
    return Children_;
}(Mother_));
var person1_ = new Mother_("Rhea", "Marron", 2); //type Mother_
var person2_ = new Children_("Déméter", "Black", 2); //Type Children_
console.log(person2_.getData());
//person1_.setHairColor("Black");
//console.log(person1_.getHair());
