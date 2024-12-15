// JSON для наглядности:

const json = [
    {
        "type": "pillowcase",
        "name": "Наволочка Журавль",
        "icon": "prints/print_11.jpg",
        "image": "pillowcases/zhurrr.webp",
        "material": "Шелк и сатин",
        "size": "50x70 см",
        "description": "Наволочка из премиальных сортов шелка или сатина. Коллекция посвящена животным и растениям Красной Книги России и призывает напомнить о бережном отношении к природе. Журавль Красавка является одной из самых красивых степных птиц. Эти маленькие птицы с удовольствием селятся на территории России, заводят пару, верность которой сохраняют всю жизнь.",
        "price": 3200,
        "quantity": 1
    },
    {
        "type": "pillowcase",
        "name": "Наволочка Таинственный лес",
        "icon": "prints/forest_1.webp",
        "image": "pillowcases/zhurrr.webp",
        "material": "Шелк и сатин",
        "size": "50x70 см",
        "description": "Орнамент Таинственный лес, олицетворяющий собой новые тренды в дизайне интерьера, опирается на классический русский узор и отдает дань уважения славянской традиции. Лес - священное место древних славян, он полон тайн и населен могущественными загадочными существами. Гамма благородных природных цветов Mollen, представленная на рисунке, создана лучшими колористами России.",
        "price": 3200,
        "quantity": 2
    },
    {
        "type": "pillowcase",
        "name": "Наволочка Алконост",
        "icon": "prints/alkonost.webp",
        "image": "pillowcases/zhurrr.webp",
        "material": "Шелк и сатин",
        "size": "50x70 см",
        "description": "Волшебная птица Алконост, изображенная на ткани, согласно древнерусским преданиям, прилетает на землю из рая и приносит радость и умиротворение. Чудесное создание порадует вас своей красотой и поможет забыть тревоги и заботы.",
        "price": 3200,
        "quantity": 3
    }
]
// Товары в корзине (локал стореж) для примера:

const json2 = JSON.stringify(json)
window.localStorage.setItem('cart', json2);
window.localStorage.setItem('wrapping', true);


// Консты:

    const productList = JSON.parse(localStorage.getItem('cart'));
    const divContainer = document.querySelector('.order-info__card-products-list');
    const totalQuantity = document.querySelector('.totals__quantity-result')
    const totalPrice = document.querySelector('.totals__discount-result')
    const wrapping = document.querySelector('.totals__wrapping-result')
    const shipping = document.querySelector('.totals__shipping-result')
    const deliveryBtn = document.querySelectorAll('.deliveryBtn');
    const pickupOption = document.getElementById('pickupOption')
    const deliveryOption = document.getElementById('deliveryOption')
    const totalOrderPrice = document.querySelector('.total-price__result')    
    const body = document.querySelector('.body');
    const checkValidate = document.querySelectorAll('.checkValidate')
    const agreeTerms = document.getElementById('agreeTerms')



    document.querySelector(".totals__btn").disabled = true;


// Рендер корзины из локал стореж:   

function renderProductCart (item) {
    const div = document.createElement("div")
    div.classList.add("card-products-list-item", 'card');
    div.innerHTML =
            // `<button type="button" class="delete-item__btn"><img src="assets/images/delete.svg"></img></button>
            `<div class="product-img"><img src="assets/images/${item.image}"></img></div>
            <a class="product-name" href='order_error.html'>${item.name}</a>
            <div class="product-quantity">
                <span>${item.quantity}</span><span> шт</span>
            </div>
            <div class="product-price">${item.price}</div>`;
    divContainer.append(div);
}
productList.forEach(product => {
    renderProductCart (product)
    })


//Подсчет и рендер итогов:

countTotals = () => {
    let resultPrice = 0;
    productList.forEach(product => {
        resultPrice += (Number(product.price)* Number(product.quantity));
        });
    return resultPrice
};
totalPrice.textContent = countTotals();

countQuantity = () => {
    let resultQuantity = 0;
    productList.forEach(product => {
        resultQuantity += Number(product.quantity);
        });
    return resultQuantity;
};
totalQuantity.textContent = countQuantity();

if (localStorage.getItem('wrapping')){
    wrapping.textContent = '500'}
    else {wrapping.textContent = 'Нет'};

totalOrderPrice.textContent = countTotals() + Number(wrapping.textContent) + 500;

deliveryBtn.forEach(function (btn) {
    btn.addEventListener('click', function() {
        if (deliveryOption.checked) {
            shipping.textContent = '500';
            totalOrderPrice.textContent = countTotals() + Number(wrapping.textContent) + 500;
        } 
        else if (pickupOption.checked) {
            shipping.textContent = 'Бесплатно';
            totalOrderPrice.textContent = countTotals() + Number(wrapping.textContent);
        } 
        else (shipping.textContent = 'Ошибка')
    })
    
})


//   Валидация формы:

const form = document.forms[0];
const formElements = form.elements;
const button = document.querySelector('.totals__btn');

var cleave = new Cleave('#tel', {
    phone: true,
    phoneRegionCode: 'RU'
});

checkValidate.forEach(function (el) {
    el.addEventListener('change', function () {
        let error = 0;

        for (let el of checkValidate) {
            if ((el.classList.contains("error")||(el.value.trim() == '')||(agreeTerms.checked == false))  === false) {
                error += 1;
                }
            };
            console.log(error);
        if (error === 5) {document.querySelector(".totals__btn").disabled = false }
        else {document.querySelector(".totals__btn").disabled = true}

})
})

// Функция сбора данных формы и корзины:

let data = {};
const createData = () => {

    $.each($('.form').serializeArray(), function(i, field) {
        data[field.name] = field.value;
    });
    
    data.products = localStorage.getItem('cart');
    data.wrapping = localStorage.getItem('wrapping');
return data;
};



//Валидация формы:

$(document).ready(function() {
    

    $('.form').validate({
        rules: {
            userName: { required: true, minlength: 2 },
            userSurname: { required: true, minlength: 2 },
            address: {required: true, minlength: 8},
            agreeTerms: {required: true},
            tel: {required: true, minlength: 13},
            },
        messages: {
            userName: {
                required: "Обязательное поле",
                minlength: jQuery.validator.format("Имя должно содержать минимум 2 символа"),
                },
            userSurname: {
                required: "Обязательное поле",
                minlength: jQuery.validator.format("Фамилия должна содержать минимум 2 символа"),
                },
            address: {
                required: "Обязательное поле",
                minlength: jQuery.validator.format("Укажите ваш адрес")
                },
            agreeTerms: {
                required: "Подтвердите согласие на обработку данных",
                },
            tel: { 
                required: "Обязательное поле",
                },
            },
        errorPlacement: function (e, i) {
            e.appendTo(i.closest(".valid-field"));
            },})
        })


// Отправка формы

form.addEventListener ("submit", async(e) => {
    e.preventDefault();

    createData();


            const response = await fetch('http://localhost:3000/orders', {
            method: 'POST',
            body: JSON.stringify(data)})
                        // .then((res) => {
                        //     return res.json(); 
                        //     })
        .then(res => {
            if (res.ok) {
                body.innerHTML = `<main class="main_final">
        <section class="section_final">
            <nav class="menu">
                <ul class="menu-list">
                    <li class="menu-item"><a class="menu-link" href="#">Главная</a></li>
                    <span>/</span>
                    <li class="menu-item"><a class="menu-link" href="#">Корзина</a></li>
                </ul>
            </nav>
            <h1>Заказ сформирован</h1>
            <p class="final_message"></p>
            <p>Вы можете следить за выполнением своего заказа в Персональном разделе сайта. Обратите внимание, что для входа в этот раздел вам необходимо будет ввести логин и пароль пользователя сайта.</p>
            <button class="final_btn" onclick="window.location.href='https://www.example.com';">В личный кабинет</button>
        </section>
        <aside class="aside_final">
        </aside>
    </main>
    <script src='assets/scripts/order_sucsess.js'></script>`;
                localStorage.removeItem('cart', 'wrapping');
                    }
            else { 
                body.innerHTML = `<main class="main_final">
        <section class="section_final">
            <nav class="menu">
                <ul class="menu-list">
                    <li class="menu-item"><a class="menu-link" href="#">Главная</a></li>
                    <span>/</span>
                    <li class="menu-item"><a class="menu-link" href="#">Корзина</a></li>
                </ul>
            </nav>
            <h1>Ошибка с оплатой</h1>     
            <p class="final_message">Вы можете следить за выполнением своего заказа в Персональном разделе сайта. Обратите внимание, что для входа в этот раздел вам необходимо будет ввести логин и пароль пользователя сайта.</p>
            <button class="final_btn" onclick="window.location.href='#';">Повторить оплату</button>
        </section>
        <aside class="aside_final">
        </aside>
    </main>`;
                    }
                })
            .catch((err) => {
                body.textContent = 'Что то пошло не так, повторите попытку';
                    })
            // .finally(( ))
            }
        );
    
        


                    





                

        // try {
        //     const response = await fetch('http://localhost:3000/orders', {
        //       method: "POST", // или 'PUT'
        //       body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //     });
        //     const json = await response.json();
        //     console.log("Успех:", JSON.stringify(json));
        //   } catch (error) {
        //     console.error("Ошибка:", error);
        //   }