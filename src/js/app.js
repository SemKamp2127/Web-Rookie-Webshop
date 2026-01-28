const API_URL = "https://fakestoreapi.com/products?limit=6";
const container = document.getElementById("product-container");

function getProducts() {
    return JSON.parse(localStorage.getItem("products")) || [];
}

function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}

async function loadProducts() {
    try {
        let products = getProducts();

        if (products.length === 0) {
            const response = await fetch(API_URL);
            products = await response.json();
            saveProducts(products);
        }

        renderProducts(products);

    } catch (error) {
        console.error("error bij het ophalen van producten:", error);
        container.innerHTML = "<p>Kan producten niet inladen.</p>";
    }
}

function renderProducts(products) {
    container.innerHTML = "";

    products.forEach(product => {
        const card = `
            <div class="bg-white rounded-xl shadow p-6">
                <img src="${product.image}" alt="${product.title}"
                    class="w-full h-48 object-contain mb-4">

                <h3 class="text-xl font-semibold mb-2">
                    ${product.title}
                </h3>

                <p class="text-gray-600 mb-4 line-clamp-3">
                    ${product.description}
                </p>

                <p class="text-lg font-bold mb-4">
                    €${product.price}
                </p>

                <button
                    onclick="addToCart(${product.id})"
                    class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Toevoegen aan mandje
                </button>
            </div>
        `;

        container.innerHTML += card;
    });
}

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
    const products = getProducts();
    const cart = getCart();

    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    alert("Product toegevoegd");
}


loadProducts();
