//exclure des ...
//type T0 = Exclude<"a" | "b" | "c" | (() => void), Function>
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (x, y, easing) {
        if (easing === "ease-in") {
            console.log("ease-in");
        }
        /*if( easing === "ease-out"){
            console.log("ease-out");
        }*/
        if (easing === "ease-in-out") {
            console.log("ease-in-out");
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
