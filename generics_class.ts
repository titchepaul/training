//generic with class
//class DataBase<T extends string | number> {
class DataBase<T> {
    data: Array<T> = [];

    saveData(val: T){
        this.data.push(val);
    }

    getAllData(){
        return [...this.data];
    }
}

const stringData = new DataBase<string>(); //Database
stringData.saveData("Marge");
stringData.saveData("Homer");
const all = stringData.getAllData();
console.log(all);

const numberData = new DataBase<number | string>();
numberData.saveData(10);
const all_1 = numberData.getAllData();
console.log(all_1);

const objData = new DataBase<object>();
objData.saveData({username: "Mario", age: 28});
console.log(objData.getAllData());