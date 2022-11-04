//c'est l'opposé de exclude
type Col = "red" | "blue" | "orange" | "green";
type MyColors = "red" | "purple" | "green";

type acceptedColors = Extract<Col, MyColors>; //red , green

function clgColors(arg: acceptedColors){
    console.log(arg);
}
clgColors("red");  //ok
//clgColors("blue"); //no