function main() {
    function Product(name, coast) {
        this.name = name;
        this.coast = coast;
    }

    function BasketOfProducts() {
        var listOfProduct = [];
        var numberOfProduct = 0;
        var totalCoast = 0;
        this.AddProduct = function (product) {
            listOfProduct.push(product);
        };
        this.GetNumberOfProducts = function () {
            return listOfProduct.length;
        };
        this.GetTotalCoast = function () {
            var sum = 0;
            listOfProduct.forEach(function (item, i, arr) {
                sum += item.coast;
            });
            return sum;
        };
    }

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
