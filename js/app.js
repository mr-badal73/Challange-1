console.log(storeData);
let products = [];
storeData.categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
        subcategory.products.forEach(product => {
            products.push(product);
        });
    });
});
products.sort((a, b) => a.price - b.price);
console.log(products);
const results = document.getElementById("results");
// Search Button
const searchBtn = document.getElementById("searchBtn");
const priceInput = document.getElementById("priceInput");

searchBtn.addEventListener("click", function () {
    const targetPrice = Number(priceInput.value);
    if (targetPrice <= 0) {
        alert("Please enter a valid price");
        return;
    }
    const closestProducts =
        findClosestProducts(products, targetPrice);
        closestProducts.sort((a, b) => a.price - b.price);
    showResults(
        closestProducts.map(product => ({
            product: product,
            difference: Math.abs(product.price - targetPrice)
        }))
    );
});
// Range Search
const rangeBtn = document.getElementById("rangeBtn");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");

rangeBtn.addEventListener("click", function () {

    const minPrice = Number(minPriceInput.value);
    const maxPrice = Number(maxPriceInput.value);

    if (minPrice <= 0 || maxPrice <= 0) {
        alert("Please enter valid prices");
        return;
    }

    if (minPrice > maxPrice) {
        alert("Minimum price cannot be greater than maximum price");
        return;
    }

    const rangeProducts =
        findProductsInRange(products, minPrice, maxPrice);

    if (rangeProducts.length === 0) {
        results.innerHTML =
            "<p>No products found in this price range.</p>";
        return;
    }

    showResults(
        rangeProducts.map(product => ({
            product: product,
            difference: 0
        }))
    );
});