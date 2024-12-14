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
    <button class="buy-button">Подробнее</button>
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



//ПОЛЗУНОК ЦЕН
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




//ВЫБОР КАТЕГОРИИ ТОВАРОВ

document.addEventListener("DOMContentLoaded", function Sort() {
    const categories = document.querySelectorAll(".category");
    const products = document.querySelectorAll(".product");
    console.log(products);

    categories.forEach((category) => {
        category.addEventListener("click", function () {
            const selectedCategory = this.getAttribute("data-category");

            // Убираем выделение со всех категорий
            categories.forEach((cat) => cat.classList.remove("selected"));
            // Добавляем выделение на выбранную категорию
            this.classList.add("selected");

            products.forEach((product) => {
                if (selectedCategory === "all") {
                    // Показывать все товары
                    product.classList.remove("hidden");
                } else {
                    // Показать только товары выбранной категории
                    if (product.getAttribute("data-category") === selectedCategory) {
                        product.classList.remove("hidden");
                    } else {
                        product.classList.add("hidden");
                    }
                }
            });
        });
    });
});

window.onload = Sort;



//В зависимости от категории отображаем доступные размеры для этой категории
document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');
    const sizeSections = {
        pillows: document.getElementById('sizes_pillowcases'),
        sheets: document.getElementById('sizes_sheets'),
        duvetCovers: document.getElementById('sizes_duvet-covers')
    };

    categories.forEach(category => {
        category.addEventListener('click', function() {
            const id = this.id;
            
            // Сначала скрываем все секции размера
            for (let key in sizeSections) {
                if (sizeSections.hasOwnProperty(key)) {
                    sizeSections[key].style.display = 'none';
                }
            }

            // Показать соответствующую секцию или все, если выбрано "Все"
            if (id === 'all') {
                for (let key in sizeSections) {
                    if (sizeSections.hasOwnProperty(key)) {
                        sizeSections[key].style.display = 'block';
                    }
                }
            } else {
                sizeSections[id].style.display = 'block';
            }
        });
    });
});
