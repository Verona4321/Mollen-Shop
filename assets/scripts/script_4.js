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




let allProducts = [];
//Загрузка данных из json
document.addEventListener('DOMContentLoaded', function() {

    // Загружаем данные из файла catalog.json
    fetch('catalog.json')
        .then(function(response) {
            // Проверяем, успешно ли был выполнен запрос
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Преобразуем ответ в JSON
        })
        .then(function(data) {
            // Добавляем данные в наш массив
            allProducts = data;
            console.log(allProducts);

            // Выводим продукты на страницу
            displayProducts(allProducts);
        })
        .catch(function(error) {
            console.error('There has been a problem with your fetch operation:', error);
        });


    function displayProducts(products) {

        // Удаляем существующие элементы (если есть)
        productList.innerHTML = '';

        // Проходим по массиву продуктов и добавляем каждый на страницу
        products.forEach(function(product) {
            console.log(product.price);
            let productCard = document.createElement('div');
            let productId = product.id;
            productCard.className = 'card';
            productCard.innerHTML = `
            <div class="icon"><img src="${product.icon}" class="icon-image"></div>
        <img src="${product.image}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <div class="availability">${product.availability}</div>
        <div class="price">${product.price} ₽</div>
        <button onclick="goToProductPage(productId)" class="buy-button">Подробнее</button>
            `;
            productList.appendChild(productCard);
        button.addEventListener('click', goToProductPage(productId));
        //button.addEventListener('click', () =&gt; goToProductPage(product.id));
        });
        
    }

    function goToProductPage() {
        // Редирект на отдельную страницу продукта
        window.location.href = `product.html?id=${productId}`;
    }

    displayProducts();

    // ЭТО НУЖНО, ПРИМЕР
    // async function loadProducts() {
    //     const response = await fetch('products.json'); // Укажите путь к вашему JSON файлу
    //     const products = await response.json();
    //     const container = document.getElementById('product-container');
    
    //     products.forEach(product => {
    //         const productDiv = document.createElement('div');
    //         productDiv.classList.add('product');
    
    //         productDiv.innerHTML = `
    //             <h2>${product.name}</h2>
    //             <img src="${product.image}" alt="${product.name}" style="width: 200px; height: auto;">
    //             <p>${product.description}</p>
    //             <p>Цена: ${product.price}</p>
    //             <button onclick="goToProductPage(${product.id})">Подробнее</button>
    //         `;
    
    //         container.appendChild(productDiv);
    //     });
    // }
    
    // function goToProductPage(productId) {
    //     // Редирект на отдельную страницу продукта
    //     window.location.href = `product.html?id=${productId}`;
    // }
    
    // loadProducts();



// Попытка обработки ошибки: "Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received"
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === "getData") {
            fetchDataFromServer()
                .then(data => {
                    sendResponse({ success: true, data: data });
                })
                .catch(error => {
                    console.error("Error:", error);
                    sendResponse({ success: false, error: error.message });
                });
            return true; // Указываем, что ответ будет асинхронным
        }
    });







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
});


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