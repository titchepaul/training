//les classes
var Invoice = /** @class */ (function () {
    function Invoice(client, product, price) {
        this.client = client;
        this.product = product;
        this.price = price;
    }
    return Invoice;
}());
var invoice1 = new Invoice('Dora', 'Template', 45);
var invoice2 = { client: "Nora", product: "SEO", price: 200 };
console.log(invoice2);
//type array object d'une instance
var invoiceArray = [];
invoiceArray.push(invoice1, invoice2);
console.log(invoiceArray);
