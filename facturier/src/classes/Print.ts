import { HasPrint } from "../interfaces/HasPrint";

export class Print implements HasPrint{

    constructor(private el: HTMLDivElement){

    }
    print(): void {
        document.body.innerHTML = this.el.innerHTML;
        window.print();
        document.location.reload();
    }
}