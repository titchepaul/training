"use strict";
//generic with class
//class DataBase<T extends string | number> {
class DataBase {
    constructor() {
        this.data = [];
    }
    saveData(val) {
        this.data.push(val);
    }
    getAllData() {
        return [...this.data];
    }
}
const stringData = new DataBase(); //Database
stringData.saveData("Marge");
stringData.saveData("Homer");
const all = stringData.getAllData();
console.log(all);
const numberData = new DataBase();
numberData.saveData(10);
const all_1 = numberData.getAllData();
console.log(all_1);
const objData = new DataBase();
objData.saveData({ username: "Mario", age: 28 });
console.log(objData.getAllData());
