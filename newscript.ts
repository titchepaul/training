//les classes
 
class Invoice {
    client: string;
    product: string;
    price: number;

    constructor(client: string, product: string, price: number){
        this.client = client;
        this.product = product;
        this.price = price;
    }
}

const invoice1 = new Invoice('Dora','Template',45);
const invoice2: Invoice = {client:"Nora", product:"SEO", price: 200};
console.log(invoice2);

//type array object d'une instance
let invoiceArray: Invoice[] = [];
invoiceArray.push(invoice1, invoice2);
console.log(invoiceArray);