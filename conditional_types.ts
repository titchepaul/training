type Mytype = number; //number
type Mytype2 = Mytype;  //number

//via le conditionnal type

type MyConditionalType = Mytype extends string ? string : null;  //null
type MyConditionalType2 = Mytype extends number ? string : null;  //string

type Mytype3<T> = T extends number ? "number" : "random";
type WithNumber = Mytype3<number>; //number
type WithNumber2 = Mytype3<string>; //random

type TypeName<T> = T extends string ? "string":
T extends number ? "number" : 
T extends boolean ? "boolean":
T extends undefined? "undefined":
T extends Function? "function":
T extends null ? "null":
"object";

function typeName<T>(arg: T): TypeName<T>{
    if(arg === null){
        return 'null' as TypeName<T>;
    }
    return typeof arg as TypeName<T>;
}

const strValue = typeName("Hello"); //string
const snumValue = typeName(20); //number
const boolValue = typeName(false); //boolean
const undefValue = typeName(undefined); //undefined
const functValue = typeName(() => console.log("Hello")); //function
const objVal = typeName(["Hello",4]); //object
const nullValue = typeName(null); //object


//Mapped types

type Props = "Prop1" | "Prop2" | "Prop3";
/*type MyMappedTypes<Props extends string | number | symbol> = {
    [P in Props]: P;
}
type MyType = MyMappedTypes<Props>
*/
type MyMappedTypes<T> = {
    readonly [P in keyof T]?: T[P];
}
type MyType = MyMappedTypes<{color: "green", price: 200}>;