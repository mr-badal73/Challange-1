# Smart Price Finder

A responsive mini e-commerce dashboard built using **HTML, CSS, and
JavaScript**.

The project helps users find products closest to a target price and
search for products within a given price range.

## 🚀 Features

-   Search for products closest to a target price
-   Display the 3 closest matching products
-   Show product name, brand, price, and rating
-   View Product button
-   Search products within a minimum and maximum price range
-   Responsive design for desktop, tablet, and mobile
-   Uses the provided product dataset from `data.js`
-   Uses binary search for efficient closest-price searching
-   Separate files for UI, application logic, and search logic

## 🛠️ Tech Stack

-   HTML5
-   CSS3
-   JavaScript
-   DOM Manipulation
-   Sorting
-   Binary Search

## 📁 Project Structure

``` text
project/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── data.js
    ├── app.js
    ├── ui.js
    └── features/
        └── search.js
```

## 🔍 How It Works

### Product Data

The product information is provided through `data.js`.

The nested categories and subcategories are converted into a single
products array in `app.js`.

### Sorting

Products are sorted once by price:

``` javascript
products.sort((a, b) => a.price - b.price);
```

### Binary Search

For a target price, binary search finds the position where the target
price exists or should be inserted.

The algorithm then checks products on both sides of that position to
find the closest products.

### Range Search

Users can enter a minimum and maximum price to find products within the
selected range.

## ⏱️ Complexity

### Initial Sorting

**Time:** `O(N log N)`

The product list is sorted once when the application loads.

### Closest Price Search

**Time:** `O(log N + K)`

Here, `K` is the number of products displayed. Since this project
displays 3 products, the search is effectively `O(log N)`.

### Space Complexity

**Space:** `O(N)`

The product data is stored in the products array.

### Range Search

The current range search uses `filter()`.

**Time:** `O(N)`

## ▶️ How to Run

1.  Clone or download the repository.
2.  Open the project folder.
3.  Open `index.html` in a browser.

No framework or package installation is required.

## 🎯 Challenge

This project was developed as part of the **Smart Price Finder**
challenge.

The main focus is:

-   Efficient price searching
-   Sorting
-   Binary search
-   Responsive UI
-   Separation of UI and logic

## 📌 Future Improvements

-   Add a 3-dot filter menu for price range
-   Add minimum and maximum price sliders
-   Add product sorting options
-   Add more product filters
-   Add a dedicated product details view

## 👨‍💻 Author

**Badal Choudhary**

B.Tech Computer Science and Engineering Student
