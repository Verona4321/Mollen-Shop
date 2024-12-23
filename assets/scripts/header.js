class CustomHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Создаем Shadow DOM
        this.shadowRoot.innerHTML = `
            <style>
                * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Orchidea Pro';
}

/* Body Styles */
body {
    
    line-height: 1.6;
    margin: 0;
    padding: 0;
    width: 100%;
   
}

.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    height: 75px;
}

.mobile-icon {
    display: none; /* Скрыть мобильные иконки */
}
.full-screen-icon {
    display: flex; 
    align-items: center;
}

/* Левая группа */
.left-group {
    display: flex;
    align-items: center;
    gap: 1.5rem; 
}

/* Правая группа */
.right-group {
    display: flex;
    align-items: center;
    gap: 1.5rem; 
}

.burger-menu {
    display: flex;
    gap: 10px;
    cursor: pointer;
}

.burger-menu .dot {
    width: 5px;
    height: 5px;
    background-color: rgb(0, 0, 0);
    border-radius: 50%;
}
/* Логотип */
.logo img {
    position: relative;
    max-height: 40px;
    top: 3px;
}

/* Каталог */
.catalog a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    color: rgb(86, 86, 86);
}

 .search-icon, .bed-icon, .shopping-bag {
    text-decoration: none;
    display: flex;
    align-items: center;
}
.search-icon a, .bed-icon a {
    text-decoration: none; /* Убираем подчеркивание */
    color: rgb(86, 86, 86); /* Устанавливаем цвет */
}


.catalog a:hover {
    color: #000000;
}

.full-screen-icon a {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.full-screen-icon img {
    left: 2px;
    margin-right: 5px;
}

.bed-icon a img {
    margin-right: 5px;
}

.search-icon a span, .bed-icon a span {
    font-size: 0.9rem;
}



/* Shopping Bag Icon */
.shopping-bag {
    position: relative;
    display: flex;
    align-items: center;
}

.shopping-bag img {
    position: relative;
    z-index: 101;
    right:2.3px;
    top: 2px;
}



.shopping-bag .circle {
    position: absolute;
    right: -10px;
    width: 40px;
    height: 40px;
    background-color: rgb(115, 144, 234);
    color: white;
    font-weight: bold;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    z-index: 100;
}

.search-icon span,
.bed-icon span {
    font-size: 0rem;
    color: rgb(86, 86, 86);
}

.main-header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Общие стили футера */
.site-footer {
    
    padding: 2rem 2rem; 
    border-top: 1px solid #ddd;
}

/* Контент футера */
.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%; 
    margin: 0 auto;
    gap: 2rem;
}

.footer-content img{
    height: 20px;
}

/* Левая часть футера */
.footer-left {
    flex: 1;
    text-align: left; 
}

.footer-left p {
    color: #777;
}
.footer-left p, .footer-right p {
    margin-top: 0; 
}

/* Центральная часть футера */
.footer-center {
    flex: 2;
    display: flex;
    justify-content: space-around; 
    align-items: flex-start; 
    margin-top: 0;
}

/* Правая часть футера */
.footer-right {
    flex: 1;
    text-align: right; 
}
.social-icons {
    display: flex;
    gap: 1rem;
    justify-content: end;
    margin-top: 4rem;
}

.footer-center ul li a, .footer-right a {
    text-decoration: none; 
    color: #777; 
    font-size: 0.9rem; 
    font-weight: normal; 
    line-height: 3; 
    
}

.footer-center ul {
    list-style: none; 
    padding: 0;
    margin: 0; 
}

.footer-center ul li a:hover, .footer-right a:hover {
    color: #000; 
}

/* Общий стиль текста в футере */
.footer-left p {
    margin-top: 6rem; 
    color: #777; 
    font-size: 0.9rem; 
    line-height: 1.5; 
}

.footer-right p{
    margin-top: 0;;
    font-size: 1.2rem;
}

/* Адаптивный дизайн для мобильных устройств */
@media (max-width: 768px) {
    .burger-menu{
        display: flex;
        flex-direction: column;
        gap: 7px;
    }
    .burger-menu .dot {
        width: 5px;
        height: 5px;
        background-color: rgb(0, 0, 0);
        border-radius: 50%;
    
    }
    .full-screen-icon {
        display: none; 
    }
    .mobile-icon {
        display: flex; 
        gap: 20px;
    }

    .mobile-icon img {
        width: 40px;
        height: 40px;
        margin-right: -10px;
       
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-left {
        display: flex;
        flex-direction: column; 
        align-items: center;
    }

    .footer-left img {
        order: 1; 
    }

    .footer-left .copyright {
        order: 5; 
        
        font-size: 0.9rem;
       
    }

    .footer-right {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer-right p {
        order: 2; 
        margin: 0;
        font-size: 1.4rem; 
        font-weight: bold;
    }

    .footer-right a {
        order: 3; 
        font-size: 1rem;
        color: #666;
        text-decoration: none;
    }

    .social-icons {
        order: 4; 
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .footer-center {
        display: none; 
    }

    .catalog {
        display: none; 
    }
}



            </style>
            <header class="main-header">
        <!-- Левая группа -->
        <div class="left-group">
            <div class="burger-menu">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <div class="logo">
                <a href="/home"><img src="assets/icons/header/mollen.png" alt="Logo"></a>
            </div>
            <div class="catalog">
                <a href="/catalog">КАТАЛОГ</a>
            </div>
        </div>
    
        <!-- Правая группа -->
        <div class="right-group">
            <div class="search-icon">
                <!-- Иконка для полной версии -->
                <a href="/search" class="full-screen-icon">
                    <img src="assets/icons/header/search_full.png" alt="Search">
                    <span>ПОИСК</span>
                </a>
                <!-- Иконка для мобильной версии -->
                <a href="/search" class="mobile-icon">
                    <img src="assets/icons/header/search.png" alt="Search">
                </a>
            </div>
            <div class="bed-icon">
                <!-- Иконка для полной версии -->
                <a href="/bed" class="full-screen-icon">
                    
                    <span>КОНСТРУКТОР</span>
                </a>
                <!-- Иконка для мобильной версии -->
                <a href="/bed" class="mobile-icon">
                    <img src="assets/icons/header/bed.png" alt="Bed">
                </a>
            </div>
            <div class="shopping-bag">
                <a href="/cart">
                    <img src="assets/icons/header/shopping_bag2.png" alt="Shopping Bag">
                </a>
                <span class="circle"></span>
            </div>
        </div>
    </header>
        `;
    }
}

// Определяем новый элемент
customElements.define('custom-header', CustomHeader);