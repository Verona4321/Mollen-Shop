//последняя версия
async function displayProducts() {
  const container = document.querySelector('.index-products');
  const choosePrint = document.getElementById('choosePrint');

  try {
    // Загрузка данных из JSON
    const response = await fetch('catalog.json');
    if (!response.ok) throw new Error('Ошибка');

    const products = await response.json();

    for (let i = 0; i <= 5; i++) {
      // products.forEach((product) => {
      const card = document.createElement('div');
      card.classList.add('index-card');
      card.innerHTML = `
  <div class="icon"><img src="${products[i].icon}" class="icon-image"></div>
  <img src="${products[i].image}" class="product-image">
  <h2 class="product-name">${products[i].name}</h2>
  <div class="availability">${products[i].availability}</div>
  <div class="price">${products[i].price} ₽</div>
  <button class="buy-button">В корзину</button>
  `;
      container.appendChild(card);

      //const print = document.createElement('div');
    }
  } catch (error) {
    console.error('Ошибка', error);
    container.innerHTML =
      '<p>Не удалось загрузить данные. Попробуйте позже.</p>';
  }
}

// Вызов функции при загрузке страницы
window.onload = displayProducts;
