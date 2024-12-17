/*let allProducts = []; // Глобальный массив для хранения всех продуктов

async function loadProducts() {
    try {
        const response = await fetch('catalog.json');
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        allProducts = await response.json(); // Сохраняем продукты в глобальный массив
        displayProducts(allProducts); // Отображаем продукты
    } catch (error) {
        console.error('Ошибка:', error);
        const container = document.getElementById('products');
        container.innerHTML = '<p>Не удалось загрузить данные. Попробуйте позже.</p>';
    }
}

function displayProducts(products) {
    const container = document.getElementById('products');
    container.innerHTML = ''; // Очистим контейнер перед добавлением новых карточек

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.category = product.category; // Допустим, в JSON есть поле category
        card.innerHTML = `
        <div class="icon"><img src="${product.icon}" class="icon-image"></div>
        <img src="${product.image}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <div class="availability">${product.availability}</div>
        <div class="price">${product.price} ₽</div>
        <button class="buy-button">Подробнее</button>
        `;
        container.appendChild(card);
    });
}

function filterProductsByCategory(category) {
    const filteredProducts = category === 'all' ? allProducts : allProducts.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

document.addEventListener("DOMContentLoaded", function() {
    loadProducts(); // Загрузить и показать продукты

    // Настройка событий на категории
    const categories = document.querySelectorAll(".category");
    categories.forEach(category => {
        category.addEventListener("click", function() {
            const selectedCategory = this.getAttribute("data-category");

            // Убираем выделение со всех категорий
            categories.forEach(cat => cat.classList.remove("selected"));
            // Добавляем выделение на выбранную категорию
            this.classList.add("selected");

            filterProductsByCategory(selectedCategory);

            // Если вам нужно показать размеры
            updateAvailableSizes(selectedCategory);
        });
    });




let allProducts = []; // Глобальный массив для хранения всех продуктов

async function loadProducts() {
    try {
        const response = await fetch('catalog.json');
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        allProducts = await response.json(); // Сохраняем продукты в глобальный массив
        displayProducts(allProducts); // Отображаем продукты
    } catch (error) {
        console.error('Ошибка:', error);
        const container = document.getElementById('products');
        container.innerHTML = '<p>Не удалось загрузить данные. Попробуйте позже.</p>';
    }
}

function displayProducts(products) {
    const container = document.getElementById('products');
    container.innerHTML = ''; // Очищаем существующее содержимое

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.innerHTML = `
            <div class="product-title">${product.title}</div>
            <div class="product-price">$${product.price}</div>
            <div class="product-description">${product.description}</div>
        `; // Добавляйте другие элементы по мере необходимости, например изображение
        
        container.appendChild(productElement);
    });
}

document.addEventListener('DOMContentLoaded', loadProducts); // Загружаем продукты после загрузки DOM
*/

/*
let allProducts = []; // Глобальный массив для хранения всех продуктов

async function loadProducts() {
    try {
        const response = await fetch('catalog.json');
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        allProducts = await response.json(); // Сохраняем продукты в глобальный массив
        displayProducts(allProducts); // Отображаем продукты
    } catch (error) {
        console.error('Ошибка:', error);
        const container = document.getElementById('products');
        container.innerHTML = '<p>Не удалось загрузить данные. Попробуйте позже.</p>';
    }
}

function displayProducts(products) {
    const container = document.getElementById('products');
    container.innerHTML = ''; // Очищаем существующее содержимое

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.innerHTML = `
            <div class="product-title">${product.title}</div>
            <div class="product-price">$${product.price}</div>
            <div class="product-description">${product.description}</div>
        `; // Добавляйте другие элементы по мере необходимости, например изображение
        
        container.appendChild(productElement);
        
    }

);
}


document.addEventListener('DOMContentLoaded', loadProducts); // Загружаем продукты после загрузки DOM
*/



// let allProducts = []; // Глобальный массив для хранения всех продуктов

// //Загружаем данные из json в массив
// async function loadProducts() {
//     try {
//         const response = await fetch('catalog.json');
//         if (!response.ok) throw new Error('Ошибка загрузки данных');
//         allProducts = await response.json(); // Сохраняем продукты в глобальный массив
//         displayProducts(allProducts); // Отображаем все продукты изначально
//         console.log(allProducts);
//     } catch (error) {
//         console.error('Ошибка:', error);
//         const container = document.getElementById('products');
//         container.innerHTML = '<p>Не удалось загрузить данные. Попробуйте позже.</p>';
//     }
// }
// //Тут всё ок

// console.log(allProducts);

// function displayProducts() {
//     const container = document.getElementById('products');
//     console.log(allProducts);
//     const productElement = document.createElement('div');
//     allProducts.forEach(product => {
//         productElement.innerHTML = product.name;
//         container.appendChild(productElement);
//     });
// }


document.addEventListener('DOMContentLoaded', function() {
    // Создаем пустой массив для хранения данных продуктов
    var allProducts = [];

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

    // Функция, которая отображает продукты в виде списка
    function displayProducts(products) {
        var productList = document.getElementById('products');

        // Удаляем существующие элементы списка (если есть)
        productList.innerHTML = '';

        // Проходим по массиву продуктов и добавляем каждый в список
        products.forEach(function(product) {
            var listItem = document.createElement('li');
            listItem.textContent = product.name; // Предполагается, что у продукта есть поле name
            productList.appendChild(listItem);
        });
    }
});








// function displayProducts(allProducts) {
//     const container = document.getElementById('products');
//     //container.innerHTML = ''; // Очищаем существующее содержимое

//     allProducts.forEach(product => {
//         const productElement = document.createElement('div');
//         productElement.className = 'product';
//         productElement.innerHTML = `
//             <div class="product-title">${product.name}</div>
//             <div class="product-price">$${product.price}</div>
//             <div class="product-description">${product.description}</div>
//         `; // Добавляйте другие элементы по мере необходимости, например изображение
        
//         container.appendChild(productElement);
//     });
    
// }

// function filterProductsByCategory(category) {
//     const filteredProducts = allProducts.filter(product => product.category === category);
//     displayProducts(filteredProducts);
// }

// document.addEventListener('DOMContentLoaded', function () {
//     loadProducts(); // Загружаем продукты после загрузки DOM



//     // Присваиваем обработчики событий для категорий
//     document.getElementById('pillowcases').addEventListener('click', function() {
//         filterProductsByCategory('pillowcases');
//     });

//     // Добавьте аналогичные обработчики для других категорий, если необходимо
//     document.getElementById('sheets').addEventListener('click', function() {
//         filterProductsByCategory('sheets');
//     });

//     // Можно добавить кнопку для отображения всех продуктов
//     document.getElementById('show-all').addEventListener('click', function() {
//         displayProducts(allProducts);
//     });














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
//Тут всё тоже ок



// const productListElement = document.getElementById('products');

// allProducts.forEach(product => {
//     const productItem = document.createElement('div');
//     productItem.textContent = `${product.name} - ${product.price}`;
//     productListElement.appendChild(productItem);
// });

    




//Отображение нужных размеров в зависимости от категории
document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы с классом 'category'
    const categories = document.querySelectorAll('.category');

    // Находим все секции, которые мы будем показывать и скрывать
    var sizePillows = document.getElementById('sizes_pillowcases');
    var sizeSheets = document.getElementById('sizes_sheets');
    var sizeDuvetCovers = document.getElementById('sizes_duvet-covers');

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










//Это пока не работает

// function displayProducts(products) {
//     const container = document.getElementById('products');
//     //container.innerHTML = ''; // Очищаем существующее содержимое

//     products.forEach(product => {
//         const productElement = document.createElement('div');
//         productElement.className = 'product';
//         productElement.innerHTML = `
//             <div class="product-title">${product.name}</div>
//             <div class="product-price">$${product.price}</div>
//             <div class="product-description">${product.description}</div>
//         `; // Добавляйте другие элементы по мере необходимости, например изображение
        
//         container.appendChild(productElement);
//     });
    
// }

// function filterProductsByCategory(category) {
//     const filteredProducts = allProducts.filter(product => product.category === category);
//     displayProducts(filteredProducts);
// }

// document.addEventListener('DOMContentLoaded', function () {
//     loadProducts(); // Загружаем продукты после загрузки DOM



//     // Присваиваем обработчики событий для категорий
//     document.getElementById('pillowcases').addEventListener('click', function() {
//         filterProductsByCategory('pillowcases');
//     });

//     // Добавьте аналогичные обработчики для других категорий, если необходимо
//     document.getElementById('sheets').addEventListener('click', function() {
//         filterProductsByCategory('sheets');
//     });

//     // Можно добавить кнопку для отображения всех продуктов
//     document.getElementById('show-all').addEventListener('click', function() {
//         displayProducts(allProducts);
//     });
// });