
const myForm = document.forms[0];
const formElements = myForm.elements;

var cleave = new Cleave('#tel', {
    phone: true,
    phoneRegionCode: 'RU'
});

// $(document).ready(function() {
//     $('.form').on('submit', function(evt) {
//         evt.preventDefault();




//     })
// })

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

}),

jQuery.extend(jQuery.validator.messages, { required: "Обязательное поле" });


