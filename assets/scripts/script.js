//последняя версия
async function displayProducts() {
    const container = document.getElementById('products');
    
    try {
    // Загрузка данных из JSON
    const response = await fetch('catalog.json');
    if (!response.ok) throw new Error('Ошибка');
    
    const products = await response.json();
    
    products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="icon"><img src="${product.icon}" class="icon-image"></div>
    <img src="${product.image}" class="product-image">
    <h2 class="product-name">${product.name}</h2>
    <div class="availability">${product.availability}</div>
    <div class="price">${product.price} ₽</div>
    <button class="buy-button">Купить</button>
    `;
    container.appendChild(card);
    });
    } catch (error) {
    console.error('Ошибка', error);
    container.innerHTML = '<p>Не удалось загрузить данные. Попробуйте позже.</p>';
    }
    }
    
    // Вызов функции при загрузке страницы
    window.onload = displayProducts;







// async function fetchProducts() {
//     try {
//         const response = await fetch('D:/Projects/Mollen-Shop/catalog.json'); 
//         if (!response.ok) {
//             throw new Error('Ошибка');
//         }
//         const catalog = await response.json();
//         displayProducts(catalog);
//     } catch (error) {
//         console.error('Ошибка при загрузке данных:', error);
//     }
// }

// function displayProducts(catalog) {
//     const container = document.getElementById('products');
//     //container.innerHTML = ''; 
//     catalog.forEach(product => {
//         const card = document.createElement('div');
//         card.classList.add('product-card');
//         card.innerHTML = `
//             <h2>${product.name}</h2>
//             <p>Цена: ${product.price}</p>
//         `;
//         container.appendChild(card);
//     });
// }

// // Вызов функции при загрузке страницы
// window.onload = fetchProducts;





// async function loadJSON() {
//     try {
//         const response = await fetch('assets/json/catalog.json'); // Путь к JSON файлу
//         // if (!response.ok) {
//         //     throw new Error('Сеть не отвечает: ' + response.status);
//         // }
//         const products = await response.json(); // Парсинг данных

//         // Вызываем функцию для отображения товаров
//         displayProducts(products);
//     } catch (error) {
//         console.error('Ошибка загрузки JSON:', error);
//     }
// }

// function displayProducts(products) {
//     const productsContainer = document.getElementById('products');
    
//     // Очистка контейнера перед добавлением новых товаров
//     //productsContainer.innerHTML = '';

//     products.forEach(product => {
//         const productDiv = document.createElement('div'); // Создаём новый див для товара
//         productDiv.className = 'product'; // Добавляем класс для стилевой обработки
//         productDiv.innerHTML = `
//             <h2>${product.name}</h2>
//             <p>${product.description}</p>
//             <p>Цена: ${product.price} руб.</p>
//         `; // Формируем HTML для одного товара
//         productsContainer.appendChild(productDiv); // Добавляем товар в контейнер
//     });
// }

// // Вызов функции при загрузке страницы
// window.onload = loadJSON;





// function displayProducts() {
//     const response = await fetch('assets/json/catalog.json');
//     const container = document.getElementById('products');
//     catalog.forEach(product => {
//         const card = document.createElement('div');
//         card.innerHTML = `
//             <h2>${catalog.name}</h2>
//             <p>${catalog.price}</p>
//         `;
//         container.appendChild(card);
//     });
// }

// // Вызов функции при загрузке страницы
// window.onload = displayProducts;


