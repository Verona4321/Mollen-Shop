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


// // Инициализация слайдера
// var slider = document.getElementById('slider');
// noUiSlider.create(slider, {
//     start: [3000, 6000],
//     connect: true,
//     range: {
//         'min': 0,
//         'max': 10000
//     },
//     step: 1000
// });


// var valueLow = document.getElementById('valueLow');
// var valueHigh = document.getElementById('valueHigh');
// // Обновляем значения при изменении слайдера
// slider.noUiSlider.on('update', function (values, handle) {
//     if (handle === 0) {
//         valueLow.innerHTML = Math.round(values[0]);
//     } else {
//         valueHigh.innerHTML = Math.round(values[1]);
//     }
//     valueLow.innerHTML = lowPrice;
//     valueHigh.innerHTML = highPrice;
//     filterProductsByPrice(lowPrice, highPrice);
// });
// //Всё ок





const categories = document.querySelectorAll('.category');
let sizePillows = document.getElementById('sizes_pillowcases');
let sizeSheets = document.getElementById('sizes_sheets');
let sizeDuvetCovers = document.getElementById('sizes_duvet-covers');
let sizeAll = document.getElementById('all');
let productList = document.getElementById('products');
//Категории:
let pillowcases = document.getElementById('pillowcase');
let sheets = document.getElementById('bedsheet');
let duvetCovers = document.getElementById('duvetCover');


//Отображение нужных размеров в зависимости от категории
document.addEventListener('DOMContentLoaded', function() {

    // Проходим в цикле по каждой категории
    categories.forEach(function(category) {
        category.addEventListener('click', function() {
            // Получаем id нажатой категории
            let id = category.id;

            // Скрываем все секции
            sizePillows.style.display = 'none';
            sizeSheets.style.display = 'none';
            sizeDuvetCovers.style.display = 'none';

            // Если выбран "все", показываем все секции
            if (id === 'all') {
                sizePillows.style.display = 'block';
                sizeSheets.style.display = 'block';
                sizeDuvetCovers.style.display = 'block';
            } else if (id === 'pillowcase') {
                sizePillows.style.display = 'block';
            } else if (id === 'bedsheet') {
                sizeSheets.style.display = 'block';
            } else if (id === 'duvetCover') {
                sizeDuvetCovers.style.display = 'block';
            }
        });
    });
});
//Тут всё тоже ок




let allProducts = [];

// Функция для загрузки продуктов из JSON
async function loadProducts() {
    const response = await fetch('catalog.json'); // Укажите путь к вашему JSON файлу
    allProducts = await response.json();
    console.log(allProducts);
    renderProducts(allProducts); // Отображение всех продуктов при загрузке
}

// Функция для отображения продуктов
function renderProducts(products) {
    const container = document.getElementById('products');
    container.innerHTML = ''; // Очищаем контейнер перед добавлением новых элементов

    products.forEach(product => {
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

// Функция перехода на отдельную страницу продукта
function goToProductPage(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Инициализация загрузки продуктов
loadProducts();

let filteredProducts = [];

// Обработка кликов по категориям
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('linen-categories').addEventListener('click', function(event) {
        if (event.target.tagName === 'DIV') {
            const selectedCategory = event.target.id; 
            console.log('Нажата категория:', selectedCategory);

            // Фильтрация продуктов
            if (selectedCategory === 'all') {
                filteredProducts = allProducts;
            } else {
                filteredProducts = allProducts.filter(product => product.type === selectedCategory);
            }

            console.log(filteredProducts);

            // Отображаем отфильтрованные продукты
            renderProducts(filteredProducts);
        }
    });
});
console.log(filteredProducts);


// const sortAsc = document.getElementById('sortAsc');
// const sortDesc = document.getElementById('sortDesc');




// // Функция фильтрации по цене
// function filterProductsByPrice(minPrice, maxPrice) {
//     filteredProducts = allProducts.filter(product => {
//         return product.price >= minPrice && product.price <= maxPrice;
//     });

//     renderProducts(filteredProducts); // Отображаем отфильтрованные продукты
// }

// // Инициализация загрузки продуктов
// loadProducts();





// Значения слайдера
const slider = document.getElementById('slider');
noUiSlider.create(slider, {
    start: [3000, 8000],
    connect: true,
    range: {
        'min': 1000,
        'max': 15000
    },
    step: 500
});

const valueLow = document.getElementById('valueLow');
const valueHigh = document.getElementById('valueHigh');

// Обновляем значения при изменении слайдера
slider.noUiSlider.on('update', function (values, handle) {
    const lowPrice = Math.round(values[0]);
    const highPrice = Math.round(values[1]);
    
    valueLow.innerHTML = lowPrice;
    valueHigh.innerHTML = highPrice;

    // Фильтрация продуктов по ценам
    filterProductsByPrice(lowPrice, highPrice);
});

// Функция фильтрации по цене
function filterProductsByPrice(minPrice, maxPrice) {
    filteredProducts = allProducts.filter(product => {
        return product.price >= minPrice && product.price <= maxPrice;
    });

    renderProducts(filteredProducts); // Отображаем отфильтрованные продукты
}

// Инициализация загрузки продуктов
loadProducts();





// Сортировка
// function sortByPrice(order = 'asc') {
//     return allProducts.slice().sort((a, b) => {
//         if (order === 'asc') {
//             return a.price - b.price; // Сортировка по возрастанию
//         } else {
//             return b.price - a.price; // Сортировка по убыванию
//         }
//     });
// }

// sortAsc.addEventListener('click', function() {
//     const sortedProducts = sortByPrice('asc'); // Сортируем по возрастанию
//     renderProducts(sortedProducts); // Отображаем отсортированные продукты
// });

// sortDesc.addEventListener('click', function() {
//     const sortedProducts = sortByPrice('desc'); // Сортируем по убыванию
//     renderProducts(sortedProducts); // Отображаем отсортированные продукты
// });


console.log(allProducts[1]);

// Эксперимент, сортировка пузырьковым методом по возрастанию

// function bubbleSortByPrice(products) {
//     const n = products.length;
//     let swapped;

//     // Внешний цикл для прохода по массиву n-1 раз
//     do {
//         swapped = false;
//         // Внутренний цикл для сравнения соседних элементов
//         for (let i = 0; i < n - 1; i++) {
//             if (products[i].price > products[i + 1].price) {
//                 // Меняем местами элементы, если они идут в неправильном порядке
//                 const temp = products[i];
//                 products[i] = products[i + 1];
//                 products[i + 1] = temp;
//                 swapped = true; // Установим флаг swapped в true, если произошло изменение
//             }
//         }
//     } while (swapped); // Продолжаем, пока есть перестановки

//     return products; // Возвращаем отсортированный массив
// }

// // Вызов функции сортировки
// const sortedProducts = bubbleSortByPrice(allProducts);

// // Вывод отсортированного массива по цене
// console.log(sortedProducts);




// function bubbleSortByPrice(allProducts) {
//     const n = allProducts.length;
//     let swapped;

//     // Внешний цикл для прохода по массиву n-1 раз
//     do {
//         swapped = false;
//         // Внутренний цикл для сравнения соседних элементов
//         for (let i = 0; i < n - 1; i++) {
//             if (allProducts[i].price > allProducts[i + 1].price) {
//                 // Меняем местами элементы, если они идут в неправильном порядке
//                 const temp = allProducts[i];
//                 allProducts[i] = allProducts[i + 1];
//                 allProducts[i + 1] = temp;
//                 swapped = true; // Установим флаг swapped в true, если произошло изменение
//             }
//         }
//     } while (swapped); // Продолжаем, пока есть перестановки

//     return allProducts; // Возвращаем отсортированный массив
// }

// // Вызов функции сортировки
// const sortedProducts = bubbleSortByPrice(allProducts);

// // Вывод отсортированного массива по цене
// console.log(sortedProducts);



function bubbleSort(products) {
    let n = products.length;

    // Внешний цикл для прохода по массиву
    for (let i = 0; i < n - 1; i++) {
        // Внутренний цикл для сравнения и обмена элементов
        for (let j = 0; j < n - 1 - i; j++) {
            // Сравниваем цены соседних продуктов
            if (products[j].price > products[j + 1].price) {
                // Меняем местами, если текущая цена больше следующей
                let temp = products[j];
                products[j] = products[j + 1];
                products[j + 1] = temp;
            }
        }
    }
}

bubbleSort(filteredProducts);
//loadProducts();

console.log(allProducts);

 











// let allProducts = [];

// async function loadProducts() {
//     const response = await fetch('catalog.json'); // Укажите путь к вашему JSON файлу
//     const allProducts = await response.json();
//     console.log(allProducts);
//     const container = document.getElementById('products');

//     allProducts.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.classList.add('card');

//         productDiv.innerHTML = `
//             <div class="icon"><img src="${product.icon}" class="icon-image"></div>
//             <img src="${product.image}" class="product-image">
//             <h2 class="product-name">${product.name}</h2>
//             <div class="availability">${product.availability}</div>
//             <div class="price">${product.price} ₽</div>
//             <button onclick="goToProductPage(${product.id})" class="buy-button">Подробнее</button>
//         `;

//         container.appendChild(productDiv);
//     });
// }

// function goToProductPage(productId) {
//     // Редирект на отдельную страницу продукта
//     window.location.href = `product.html?id=${productId}`;
// }

// loadProducts();



// document.addEventListener("DOMContentLoaded", function() {
//     let filteredProducts = []; //массив для отфильтрованных

//     document.getElementById('linen-categories').addEventListener('click', function(event) {
//         if (event.target.tagName === 'DIV') {
//             const selectedCategory = event.target.id;   //сохранение состояния?
//             console.log('Нажата категория:', selectedCategory);

//             // Обновляем состояние фильтра
//             let currentFilter = selectedCategory;

//             if (currentFilter === 'all') {
//                 filteredProducts = allProducts;
//             } else {
//                 filteredProducts = allProducts.filter(product => product.type === currentFilter);
//             }

//             console.log(filteredProducts);

//             //renderProducts(filteredProducts);
//         }
//     });
    

// });




// //Категории:
// let pillowcases = document.getElementById('pillowcases');
// let sheets = document.getElementById('sheets');
// let duvetCovers = document.getElementById('sheets');
// //let sizeAll = document.getElementById('all');



