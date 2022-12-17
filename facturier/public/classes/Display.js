import { Storage } from "../classes/Storage.js";
export class Display {
    constructor(container, hiddenDiv, btnPrint) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.btnPrint = btnPrint;
        //document.getElementById('document-container');
        this.formContainer = document.getElementById('form-container');
    }
    render(docOdj, docType) {
        const htmlString = docOdj.htmlFormat();
        this.container.innerHTML = htmlString;
        new Storage(docType, htmlString);
        if (docType === 'invoice') {
            this.btnPrint.innerText = 'Imprimer la facture';
        }
        else {
            this.btnPrint.innerText = "Imprimer le devis";
        }
        this.hiddenDiv.classList.remove('invisible'); //retirer la classe invisible 
        this.formContainer.innerHTML = "";
    }
}
