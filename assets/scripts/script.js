//последняя версия
async function displayProducts() {
    const container = document.getElementById('products');
    const choosePrint = document.getElementById('choosePrint');
    
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
    <button class="buy-button">В корзину</button>
    `;
    container.appendChild(card);

    //const print = document.createElement('div');
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




/*
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.thumbleft");
var thumbRight = document.querySelector(".slider > .thumb.thumbright");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});
*/



document.addEventListener('DOMContentLoaded', function () {
    var slider = document.getElementById('slider');
    if (!slider) {
        noUiSlider.create(slider, {
            start: [20, 80],   // Начальные позиции рукояток
            connect: true,     // Указывает на соединение между рукоятками
            range: {
                'min': 0,      // Минимальное значение слайдера
                'max': 100     // Максимальное значение слайдера
            },
            step: 1,           // Шаг изменения значений
            tooltips: [true, true], // Показывать подсказки над рукоятками
            format: {
                to: function (value) {
                    return value.toFixed(1);  // Форматирование значения с одним десятичным знаком
                },
                from: function (value) {
                    return Number(value);
                }
            }
        });
    } else {
        console.error('Слайдер не найден');
    }
});


var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [15000, 15000],
        connect: true,
        range: {
            'min': 0,
            'max': 30000
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

