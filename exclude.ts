//exclure des ...
//type T0 = Exclude<"a" | "b" | "c" | (() => void), Function>

type Easing = "ease-in" | "ease-out" | "ease-in-out";
type Animate = Exclude<Easing, "ease-out">

class UIElement {
    animate(x: number, y: number, easing: Animate){
        if( easing === "ease-in"){
            console.log("ease-in");
        }
        /*if( easing === "ease-out"){
            console.log("ease-out");
        }*/
        if( easing === "ease-in-out"){
            console.log("ease-in-out");
        }
    }
}

let button = new UIElement();
button.animate(0,0, "ease-in");