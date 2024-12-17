document.addEventListener('DOMContentLoaded', () => {
    const callBtn = document.getElementById('call-request-btn');
    const popupOverlay = document.getElementById('popup-overlay');
    const closePopup = document.getElementById('close-popup');

    // Открытие попапа
    callBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращает переход по ссылке
        popupOverlay.style.display = 'flex';
    });

    // Закрытие попапа
    closePopup.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
    });

    // Закрытие при клике на фон
    window.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });
});