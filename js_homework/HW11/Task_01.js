function main() {
    function Product(name, coast) {
        this.name = name;
        this.coast = coast;
    }

    function BasketOfProducts() {
    }

    BasketOfProducts.prototype.listOfProduct = [];
    BasketOfProducts.prototype.numberOfProduct = 0;
    BasketOfProducts.prototype.totalCoast = 0;

    BasketOfProducts.prototype.AddProduct = function (product) {
        this.listOfProduct.push(product);
    };
    BasketOfProducts.prototype.GetNumberOfProducts = function () {
        return this.listOfProduct.length;
    };
    BasketOfProducts.prototype.GetTotalCoast = function () {
        var sum = 0;
        this.listOfProduct.forEach(function (item, i, arr) {
            sum += item.coast;
        });
        return sum;
    };

    var basket = new BasketOfProducts();
    basket.AddProduct(new Product("apple", 10));
    basket.AddProduct(new Product("orange", 2));
    basket.AddProduct(new Product("door", 1));
    basket.AddProduct(new Product("Batman", 3));
    basket.AddProduct(new Product("Horse", 5));
    alert(basket.GetNumberOfProducts());
    alert(basket.GetTotalCoast());
}

main();
