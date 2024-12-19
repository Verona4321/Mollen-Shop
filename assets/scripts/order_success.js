document.addEventListener("DOMContentLoaded", (event) => {
    let finalMessage = document.querySelector('.final_message')
    let date = new Date();
    finalMessage.textContent = `Ваш заказ от ${date.toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })} успешно создан.`
    })