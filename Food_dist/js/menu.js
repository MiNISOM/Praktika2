class MyComponent extends HTMLElement {
    constructor() {
        super();

        // Создание Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Использование шаблонной строки для создания HTML
        const template = `
            <link rel="stylesheet" href="css/style.css">
            <link rel="stylesheet" href="css/adaptive.css">
            <section class="promotion">
                <div class="bgc_y"></div>
                <div class="container">
                    <div class="promotion__text">
                        <div class="title">Акция для новых клиентов!</div>
                        <div class="promotion__descr">
                            Мы ценим каждого клиента и предлагаем вам стать одним из них на очень выгодных условиях. 
                            Каждому, кто закажет доставку питание на неделю, будет предоставлена скидка в размере <span>20%!</span>
                            <br><br>
                            Акция закончится 20 мая в 00:00
                        </div>
                    </div>
                    <div class="promotion__timer">
                        <div class="title">Осталось до конца акции:</div>
                        <div class="timer">
                            <div class="timer__block">
                                <span id="days">12</span>
                                дней
                            </div>
                            <div class="timer__block">
                                <span id="hours">20</span>
                                часов
                            </div>
                            <div class="timer__block">
                                <span id="minutes">56</span>
                                минут
                            </div>
                            <div class="timer__block">
                                <span id="seconds">20</span>
                                секунд
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        shadow.innerHTML = template;
    }
}

customElements.define('my-promotion', MyComponent);