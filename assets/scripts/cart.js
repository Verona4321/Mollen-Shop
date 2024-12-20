// Cart data structure
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart functionality with dynamic quantity
function addToCart(product) {
    const quantityElement = document.querySelector('.product-quantity'); // Fetch current quantity
    const selectedQuantity = parseInt(quantityElement.textContent); // Convert quantity to number

    product.quantity = selectedQuantity; // Use selected quantity
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += product.quantity; // Increment quantity if already in the cart
    } else {
        cart.push(product); // Add new product to the cart
    }
    saveCartToLocalStorage();
    alert(`${product.name} добавлено в корзину (${product.quantity} шт.)`);
}


// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Display cart items in the checkout page
function displayCartItems() {
    const cartContainer = document.querySelector('.checkoutItems');
    if (!cartContainer) return;

    cartContainer.innerHTML = `
        <div class="checkoutHeader">
            <span class="smallTextHeader">
                <a href="/index.html">Главная</a> / Корзина
            </span>
            <h1>Корзина</h1>
        </div>
    `;

    if (cart.length === 0) {
        cartContainer.innerHTML += `<p>Корзина пуста</p>`;
        return;
    }

    cart.forEach(item => {
        const itemElement = `
            <div class="checkoutItem">
                <img src="${item.image}" alt="${item.name}" class="itemImage" />
                <div class="itemDetails">
                    <h2>${item.name}</h2>
                    <div class="sizeAndColor">
                        <p class="size">${item.size}</p>
                        <p class="material">${item.material}</p>
                    </div>
                </div>
                <span class="itemQuantity">
                    <button class="quantityLess" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantityMore" data-id="${item.id}">+</button>
                </span>
                <span class="itemPrice">${item.price} ₽</span>
                <button class="deleteButton" data-id="${item.id}" type="button">Удалить</button>
            </div>
        `;
        cartContainer.innerHTML += itemElement;
    });

    attachCartEventListeners();
}

// Attach event listeners to quantity and delete buttons
function attachCartEventListeners() {
    document.querySelectorAll('.quantityLess').forEach(button => {
        button.addEventListener('click', event => {
            const id = parseInt(event.target.dataset.id); // Convert to number
            updateQuantity(id, -1);
        });
    });

    document.querySelectorAll('.quantityMore').forEach(button => {
        button.addEventListener('click', event => {
            const id = parseInt(event.target.dataset.id); // Convert to number
            updateQuantity(id, 1);
        });
    });

    document.querySelectorAll('.deleteButton').forEach(button => {
        button.addEventListener('click', event => {
            const id = parseInt(event.target.dataset.id); // Convert to number
            removeFromCart(id);
        });
    });
}

// Update item quantity
function updateQuantity(id, delta) {
    const item = cart.find(product => product.id === id);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(id);
    } else {
        saveCartToLocalStorage();
        displayCartItems();
    }
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(product => product.id !== id);
    saveCartToLocalStorage();
    displayCartItems();
    alert('Товар удалён из корзины!');
}

document.addEventListener('DOMContentLoaded', () => {
    displayCartItems(); // Populate the cart on the checkout page
});
