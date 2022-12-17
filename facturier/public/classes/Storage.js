export class Storage {
    constructor(typeval, htmlString) {
        this.oldData = [];
        this.setItem(typeval, htmlString);
    }
    static checkLocalStorage() {
        if (localStorage.getItem('invoice') === null) {
            localStorage.setItem('invoice', '[]');
        }
        if (localStorage.getItem('estimate') === null) {
            localStorage.setItem('estimate', '[]');
        }
    }
    setItem(typeval, htmlString) {
        let array;
        array = localStorage.getItem(typeval);
        if (array !== null) {
            this.oldData = JSON.parse(array);
            this.oldData.push(htmlString);
            localStorage.setItem(typeval, JSON.stringify(this.oldData));
        }
        else {
            document.location.reload();
        }
    }
}
