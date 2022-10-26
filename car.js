//readOnly
var Car = /** @class */ (function () {
    //readonly color: string = 'red';
    //readonly color: string;
    //public gears: number = 4;
    function Car(color, gears) {
        this.color = color;
        this.gears = gears;
        //this.color = color;
    }
    return Car;
}());
var ford = new Car("white", 5);
console.log(ford);
