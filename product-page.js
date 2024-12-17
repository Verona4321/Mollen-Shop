const menuToggle = document.querySelector('.burger-menu');
const sideMenu = document.getElementById('side-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

// Открытие меню
menuToggle.addEventListener('click', () => {
    if (!sideMenu.classList.contains('open')) {
        sideMenu.classList.add('open');
        anime({
            targets: '.side-menu',
            left: ['-100%', '0%'],
            duration: 500,
            easing: 'easeOutQuad',
        });
    }
});

// Закрытие меню через кнопку
closeMenuBtn.addEventListener('click', () => {
    anime({
        targets: '.side-menu',
        left: ['0%', '-100%'],
        duration: 500,
        easing: 'easeInQuad',
        complete: () => sideMenu.classList.remove('open'),
    });
});