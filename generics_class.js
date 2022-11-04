var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//generic with class
//class DataBase<T extends string | number> {
var DataBase = /** @class */ (function () {
    function DataBase() {
        this.data = [];
    }
    DataBase.prototype.saveData = function (val) {
        this.data.push(val);
    };
    DataBase.prototype.getAllData = function () {
        return __spreadArray([], this.data, true);
    };
    return DataBase;
}());
var stringData = new DataBase(); //Database
stringData.saveData("Marge");
stringData.saveData("Homer");
var all = stringData.getAllData();
console.log(all);
var numberData = new DataBase();
numberData.saveData(10);
var all_1 = numberData.getAllData();
console.log(all_1);
var objData = new DataBase();
objData.saveData({ username: "Mario", age: 28 });
console.log(objData.getAllData());
