class Header extends HTMLElement {
    constructor() {
        super();

        // Создание Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Использование шаблонной строки для создания HTML
        const template = `
            <link rel="stylesheet" href="css/style.css">
            <link rel="stylesheet" href="css/adaptive.css">
            <header class="header">
                <div class="header__left-block">
                    <div class="header__logo">
                        <img src="icons/logo.svg" alt="Логотип">
                    </div>
                    <nav class="header__links">
                        <a href="#" class="header__link">Доставка питания</a>
                        <a href="#" class="header__link">Второй пункт</a>
                    </nav>
                </div>
                <div class="header__right-block">
                    <button class="btn btn_white">Связаться с нами</button>
                </div>
            </header>
        `;

        shadow.innerHTML = template;
    }
}

customElements.define('for-header', Header);