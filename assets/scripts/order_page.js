// JSON для наглядности:

const json = [
    {
        "type": "pillowcase",
        "name": "Наволочка Журавль",
        "icon": "prints/print_11.jpg",
        "image": "assets/images/pillowcases/zhurrr.webp",
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
        "image": "assets/images/pillowcases/zhurrr.webp",
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
        "image": "assets/images/pillowcases/zhurrr.webp",
        "material": "Шелк и сатин",
        "size": "50x70 см",
        "description": "Волшебная птица Алконост, изображенная на ткани, согласно древнерусским преданиям, прилетает на землю из рая и приносит радость и умиротворение. Чудесное создание порадует вас своей красотой и поможет забыть тревоги и заботы.",
        "price": 3200,
        "quantity": 3
    }
]
// Товары в корзине (локал стореж):

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


// Загрузка товаров из ЛС:   

function renderProductCart (item) {
    const div = document.createElement("div")
    div.classList.add("card-products-list-item", 'card');
    div.innerHTML =
            // `<button type="button" class="delete-item__btn"><img src="assets/images/delete.svg"></img></button>
            `<div class="product-img"><img src="${item.image}"></img></div>
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




//Подсчет итогов:

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
const myForm = document.forms[0];
const formElements = myForm.elements;
const button = document.querySelector('.totals__btn');
// button.setAttribute('disabled', true);

var cleave = new Cleave('#tel', {
    phone: true,
    phoneRegionCode: 'RU'
});

document.addEventListener("DOMContentLoaded", (event) => {

$(".form").validate({
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
        },
    })

jQuery.extend(jQuery.validator.messages, { required: "Обязательное поле" });

})

// $(document).ready(function() {
//     $('.form').on('submit', function(evt) {
//         evt.preventDefault();
//     })
// })




// $('#myform').on('submit', function(event) {
//     event.preventDefault();

//         this.submit();
    
// });


// const inputFields = document.querySelectorAll('.input-field');
// console.log(inputFields);

// inputFields.forEach(function (input) {
//         input.addEventListener('blur', function () {        

//         })

//     })




// inputFields.addEventListener('blur', function () {
//     let mass= [];
//     for(let inp of inputFields) {
//       if (inp.classList.contains('error')) {
//         mass = mass + 1;
//         };
//         };
//         console.log(mass)
//     if (mass.length === 0){
//         button.setAttribute('disabled', true);
//     }
// })


// let mass= [];

// inputFields.forEach(function (input) {
//     input.addEventListener('blur', function () {        
//       if (input.classList.contains('error')) {
//         mass = mass + 1;
//         };})
//         console.log(mass.length)
//     })
//     if (mass.length === 0){
//             button.setAttribute('disabled', false);
//     }

// 
//     input.addEventListener('focus', function () {
//         parent.style.border = '2px solid black'; //Изменение границы при фокусе

//     });
//     input.addEventListener('blur', function () {
//         input.style.border = ''; //Восстановление стандартной границы после потери фокуса
//         parent.classList.add('errorTwo')
//     });
// });




// document.myForm.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     console.log(`Имя: ${userName.value},
//         почта: ${email.value}, 
//         возраст: ${age.value}, 
//         пол: ${gender}, 
//         возраст: ${age.value}, 
//         профессия: ${job.selectedIndex.value}`)
//     myForm.reset()
//     button.setAttribute('disabled', true);
//     }
// );
