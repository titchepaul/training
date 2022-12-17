import { HasHtmlFormat } from "../interfaces/HasHtmlFormat.js";
import { HasRender } from "../interfaces/hasRender.js";
import { Storage } from "../classes/Storage.js";

export class Display implements HasRender {

    formContainer: HTMLDivElement;

    constructor(
        private container: HTMLDivElement, 
        private hiddenDiv: HTMLDivElement, 
        private btnPrint: HTMLButtonElement
    ){
        //document.getElementById('document-container');
        this.formContainer = document.getElementById('form-container') as HTMLDivElement;
    }
    render(docOdj: HasHtmlFormat, docType: string): void {
        const htmlString: string = docOdj.htmlFormat();
        this.container.innerHTML = htmlString;
        new Storage(docType, htmlString);

        if(docType === 'invoice'){
            this.btnPrint.innerText = 'Imprimer la facture';
        }else{
            this.btnPrint.innerText = "Imprimer le devis";
        }
        this.hiddenDiv.classList.remove('invisible'); //retirer la classe invisible 
        this.formContainer.innerHTML = "";
    }

}