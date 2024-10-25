class MyComponent extends HTMLElement {
    constructor() {
        super();

        // Создание Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Использование шаблонной строки для создания HTML
        const template = `
            <link rel="stylesheet" href="css/style.css">
            <link rel="stylesheet" href="css/adaptive.css">
            <section class="sidepanel">
                <div class="sidepanel__text"><span>Социальные сети</span></div>
                <div class="sidepanel__divider"></div>
                <a href="#" class="sidepanel__icon">
                    <img src="icons/instagram.svg" alt="instagram">
                </a>
                <a href="#" class="sidepanel__icon">
                    <img src="icons/facebook.svg" alt="facebook">
                </a>
            </section>
        `;

        shadow.innerHTML = template;
    }
}

customElements.define('my-side-panel', MyComponent);