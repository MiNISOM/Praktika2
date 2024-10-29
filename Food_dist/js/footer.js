class MyComponent extends HTMLElement {
    constructor() {
        super();

        // Создание Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Использование шаблонной строки для создания HTML
        const template = `
            <link rel="stylesheet" href="css/style.css">
            <link rel="stylesheet" href="css/adaptive.css">
            <footer class="footer">
                <div class="container">
                    <nav class="social">
                        <div class="subtitle">Мы в социальных сетях:</div>
                        <a href="#" class="link">instagram</a>
                        <a href="#" class="link">facebook</a>
                    </nav>
                    <div class="pepper">
                        <img src="icons/veg.svg" alt="pepper">
                    </div>
                    <nav class="call">
                        <div class="subtitle">Или позвоните нам</div>
                        <a href="#" class="link">+380678341034</a>
                        <a href="#" class="link">+380500941356</a>
                    </nav>
                </div>
            </footer>
        `;

        shadow.innerHTML = template;
    }
}

customElements.define('for-footer', MyComponent);