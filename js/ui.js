function showResults(closestProducts) {

    const results = document.getElementById("results");

    results.innerHTML = "";

    closestProducts.forEach(item => {

        const product = item.product;

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Brand: ${product.brand}</p>
            <p>Price: ₹${product.price}</p>
            <p>Rating: ⭐ ${product.rating}</p>
            <button class="view-btn">View Product</button>
        `;

        const viewButton = card.querySelector(".view-btn");

        viewButton.addEventListener("click", function () {

            alert(
                product.name +
                "\n\nBrand: " + product.brand +
                "\nPrice: ₹" + product.price +
                "\nRating: ⭐ " + product.rating
            );

        });

        results.appendChild(card);
    });
}