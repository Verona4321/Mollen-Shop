async function loadPrints() {
    const container = document.getElementById('prints-container');

    try {
        // Загружаем данные из JSON
        const response = await fetch('catalog.json');
        if (!response.ok) throw new Error('Ошибка загрузки данных');

        const data = await response.json();

        // Фильтруем элементы с типом "pillowcase"
        const pillowcases = data.filter(item => item.type === 'pillowcase');

        // Добавляем изображения принтов в контейнер
        pillowcases.forEach(item => {
            const printDiv = document.createElement('div');
            printDiv.classList.add('print-item');

            const img = document.createElement('img');
            img.src = item.icon;
            img.alt = item.name;

            printDiv.appendChild(img);
            container.appendChild(printDiv);
        });
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Запускаем функцию при загрузке страницы
loadPrints();