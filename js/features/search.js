function binarySearch(products, targetPrice) {

    let left = 0;
    let right = products.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (products[mid].price === targetPrice) {
            return mid;
        }

        if (products[mid].price < targetPrice) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}


function findClosestProducts(products, targetPrice) {

    const position = binarySearch(products, targetPrice);

    let left = position - 1;
    let right = position;

    let closestProducts = [];

    while (
        closestProducts.length < 3 &&
        (left >= 0 || right < products.length)
    ) {

        if (left < 0) {

            closestProducts.push(products[right]);
            right++;

        } else if (right >= products.length) {

            closestProducts.push(products[left]);
            left--;

        } else {

            const leftDifference =
                Math.abs(products[left].price - targetPrice);

            const rightDifference =
                Math.abs(products[right].price - targetPrice);

            if (leftDifference <= rightDifference) {
                closestProducts.push(products[left]);
                left--;
            } else {
                closestProducts.push(products[right]);
                right++;
            }
        }
    }

    return closestProducts;
}


function findProductsInRange(products, minPrice, maxPrice) {

    return products.filter(product => {
        return product.price >= minPrice &&
               product.price <= maxPrice;
    });
}