class MyComponent extends HTMLElement {
    constructor() {
        super();

        // Создание Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Использование шаблонной строки для создания HTML
        const template = `
            <link rel="stylesheet" href="css/style.css">
            <link rel="stylesheet" href="css/adaptive.css">
            <section class="order">
                <div class="container">
                    <div class="title">Заказывай пробный день прямо сейчас!</div>
                    <form action="#" class="order__form">
                        <input required placeholder="Ваше имя" name="name" type="text" class="order__input">
                        <input required placeholder="Ваш номер телефона" name="phone" type="phone" class="order__input">
                        <img src="icons/right.svg" alt="right">
                        <button class="btn btn_dark btn_min">Перезвонить мне</button>
                    </form>
                </div>
            </section>
        `;

        shadow.innerHTML = template;
    }
}

customElements.define('my-order', MyComponent);