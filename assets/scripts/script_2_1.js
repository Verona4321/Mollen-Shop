//Выделение нужной категории
document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll('.category');
    categories.forEach(function(category) {
        category.addEventListener('click', function() {
            categories.forEach(cat => cat.classList.remove('selected')); // Удаляем выделение
            category.classList.add('selected'); // Добавляем выделение к текущей кнопке
        });
    });

    // Устанавливаем "Все" как выбранный элемент при загрузке страницы
    const allCategory = document.querySelector('.category.selected');
    if (allCategory) {
        allCategory.classList.add('selected');
    }
});
//Тут всё ок


// Инициализация слайдера
var slider = document.getElementById('slider');
noUiSlider.create(slider, {
    start: [3000, 6000],
    connect: true,
    range: {
        'min': 0,
        'max': 10000
    },
    step: 1000
});


var valueLow = document.getElementById('valueLow');
var valueHigh = document.getElementById('valueHigh');
slider.noUiSlider.on('update', function (values, handle) {
    if (handle === 0) {
        valueLow.innerHTML = Math.round(values[0]);
    } else {
        valueHigh.innerHTML = Math.round(values[1]);
    }
});
//Всё ок



const categories = document.querySelectorAll('.category');
let sizePillows = document.getElementById('sizes_pillowcases');
let sizeSheets = document.getElementById('sizes_sheets');
let sizeDuvetCovers = document.getElementById('sizes_duvet-covers');
let sizeAll = document.getElementById('all');
let productList = document.getElementById('products');


//Отображение нужных размеров в зависимости от категории
document.addEventListener('DOMContentLoaded', function() {

    // Проходим в цикле по каждой категории
    categories.forEach(function(category) {
        category.addEventListener('click', function() {
            // Получаем id нажатой категории
            var id = category.id;

            // Скрываем все секции
            sizePillows.style.display = 'none';
            sizeSheets.style.display = 'none';
            sizeDuvetCovers.style.display = 'none';

            // Если выбран "все", показываем все секции
            if (id === 'all') {
                sizePillows.style.display = 'block';
                sizeSheets.style.display = 'block';
                sizeDuvetCovers.style.display = 'block';
            } else if (id === 'pillowcases') {
                sizePillows.style.display = 'block';
            } else if (id === 'sheets') {
                sizeSheets.style.display = 'block';
            } else if (id === 'duvetCovers') {
                sizeDuvetCovers.style.display = 'block';
            }
        });
    });
});
//Тут всё тоже ок










// let allProducts = [];
// //Загрузка данных из json
// document.addEventListener('DOMContentLoaded', function() {

//     fetch('catalog.json')
//         .then(function(response) {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json(); // Преобразуем ответ в JSON
//         })
//         .then(function(data) {
//             // Добавляем данные в наш массив
//             allProducts = data;
//             console.log(allProducts);

//             // Выводим продукты на страницу
//             displayProducts(allProducts);
//         })
//         .catch(function(error) {
//             console.error('There has been a problem with your fetch operation:', error);
//         });

//     // Функция, которая отображает товары
//     function displayProducts(products) {

//         // Удаляем существующие элементы списка (если есть)
//         productList.innerHTML = '';

//         // Проходим по массиву продуктов и добавляем каждый в список
//         products.forEach(function(product) {
//             let productCard = document.createElement('div');
//             productCard.className = 'card';
//             productCard.innerHTML = `
//             <div class="icon"><img src="${product.icon}" class="icon-image"></div>
//         <img src="${product.image}" class="product-image">
//         <h2 class="product-name">${product.name}</h2>
//         <div class="availability">${product.availability}</div>
//         <div class="price">${product.price} ₽</div>
//         <button class="buy-button" onclick="goToProductPage(${product.id})">Подробнее</button>
//             `;
//             button.addEventListener('click', goToProductPage(productId));
//             productList.appendChild(productCard);
//         });
//     }

//     function goToProductPage(productId) {
//         // Редирект на отдельную страницу продукта
//         window.location.href = `product.html?id=${productId}`;
//     }
    
//     displayProducts(allProducts);




async function loadProducts() {
    const response = await fetch('catalog.json'); // Укажите путь к вашему JSON файлу
    const allProducts = await response.json();
    console.log(allProducts);
    const container = document.getElementById('products');

    allProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('card');

        productDiv.innerHTML = `
            <div class="icon"><img src="${product.icon}" class="icon-image"></div>
            <img src="${product.image}" class="product-image">
            <h2 class="product-name">${product.name}</h2>
            <div class="availability">${product.availability}</div>
            <div class="price">${product.price} ₽</div>
            <button onclick="goToProductPage(${product.id})" class="buy-button">Подробнее</button>
        `;

        container.appendChild(productDiv);
    });
}

function goToProductPage(productId) {
    // Редирект на отдельную страницу продукта
    window.location.href = `product.html?id=${productId}`;
}

loadProducts();








    function filterProducts(type) {
        if (type === 'all') {
            return allProducts;
        } else {
            return allProducts.filter(product => product.type === type);
        }
    }

    // Обработчики событий для кнопок
    sizeAll.addEventListener('click', () => displayProducts(filterProducts('all')));
    pillowcases.addEventListener('click', () => displayProducts(filterProducts('pillowcase')));
    sheets.addEventListener('click', () => displayProducts(filterProducts('bedsheet')));
    duvetCovers.addEventListener('click', () => displayProducts(filterProducts('duvetCovers')));

    // Отобразить все продукты по умолчанию
    displayProducts(filterProducts('all'));



console.log(categories);
console.log(typeof(categories));





// const categories = document.querySelectorAll('.category');
// let sizePillows = document.getElementById('sizes_pillowcases');
// let sizeSheets = document.getElementById('sizes_sheets');
// let sizeDuvetCovers = document.getElementById('sizes_duvet-covers');
// let productList = document.getElementById('products');


//Категории:
let pillowcases = document.getElementById('pillowcases');
let sheets = document.getElementById('sheets');
let duvetCovers = document.getElementById('sheets');
//let sizeAll = document.getElementById('all');




//Фильтр по категориям
// document.addEventListener('DOMContentLoaded', function() {
//     // Фильтрация продуктов по типу
//     function filterProducts(type) {
//         if (type === 'all') {
//             return allProducts;
//         } else {
//             return allProducts.filter(product => product.type === type);
//         }
//     }

//     // Обработчики событий для кнопок
//     sizeAll.addEventListener('click', () => displayProducts(filterProducts('all')));
//     pillowcases.addEventListener('click', () => displayProducts(filterProducts('pillowcases')));
//     sheets.addEventListener('click', () => displayProducts(filterProducts('sheets')));
//     duvetCovers.addEventListener('click', () => displayProducts(filterProducts('duvetCovers')));

//     // Отобразить все продукты по умолчанию
//     displayProducts(filterProducts('all'));
// });