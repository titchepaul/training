import { HasSetItem } from "../interfaces/HasSetItem";

export class Storage  implements HasSetItem{

    oldData: string[] = [];

    constructor(typeval: string, htmlString: string){
        this.setItem(typeval, htmlString);
    }
    
    static checkLocalStorage(): void{
        if(localStorage.getItem('invoice') === null){
            localStorage.setItem('invoice','[]');
        }
        if(localStorage.getItem('estimate') === null){
            localStorage.setItem('estimate','[]');
        }
    }
    setItem(typeval: string, htmlString: string): void {
       let array: string | null;
       array = localStorage.getItem(typeval);
       if(array !== null){
        this.oldData  = JSON.parse(array);
        this.oldData.push(htmlString);
        localStorage.setItem(typeval,JSON.stringify(this.oldData));
       }else{
        document.location.reload();
       }
    }
}