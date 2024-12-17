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


async function loadPrintsAndColors() {
    const printsContainer = document.getElementById('print');
    const colorsContainer = document.getElementById('colors');

    try {
        // Fetch the JSON file
        const response = await fetch('catalog.json');
        if (!response.ok) throw new Error('Failed to load JSON');
        const data = await response.json();

        const iconsSet = new Set();
        const colorsSet = new Set();

        // Extract unique prints and colors
        data.forEach(item => {
            if (item.type === 'pillowcase') {
                iconsSet.add(item.icon); // Print icons
            } else if (item.type === 'bedsheet') {
                colorsSet.add(item.icon); // Color icons
            }
        });

        // Clear containers
        printsContainer.innerHTML = '';
        colorsContainer.innerHTML = '';

        // Render prints
        iconsSet.forEach(icon => {
            const img = document.createElement('img');
            img.src = icon;
            img.alt = "Print";
            img.classList.add('print-img');
            printsContainer.appendChild(img);
        });

        // Render colors
        colorsSet.forEach(color => {
            const colorDiv = document.createElement('div');
            colorDiv.classList.add('color-item');
            colorDiv.style.backgroundImage = `url(${color})`;
            colorsContainer.appendChild(colorDiv);
        });
    } catch (error) {
        console.error("Error loading prints and colors:", error);
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', loadPrintsAndColors);
