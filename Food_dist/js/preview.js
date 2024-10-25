class MyComponent extends HTMLElement {
    constructor() {
        super();

        // Создание Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Использование шаблонной строки для создания HTML
        const template = `
            <link rel="stylesheet" href="css/style.css">
            <link rel="stylesheet" href="css/adaptive.css">
            <section class="preview">
                <div class="bgc_blue"></div>
                <div class="container">
                    <div class="tabcontainer">
                        <div class="tabcontent">
                            <img src="img/tabs/vegy.jpg" alt="vegy">
                            <div class="tabcontent__descr">
                                Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!
                            </div>
                        </div>
                        <!-- <div class="tabcontent">
                            <img src="img/tabs/elite.jpg" alt="elite">
                            <div class="tabcontent__descr">
                                Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!                                     
                            </div>
                        </div> -->
                        <!-- <div class="tabcontent">
                            <img src="img/tabs/post.jpg" alt="post">
                            <div class="tabcontent__descr">
                                Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!                                     
                            </div>
                        </div>
                        <div class="tabcontent">
                            <img src="img/tabs/vegy.jpg" alt="vegy">
                            <div class="tabcontent__descr">
                                Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.
                            </div>
                        </div> -->
                        <div class="tabheader">
                            <h3>Выберите стиль питания</h3>
                            <div class="tabheader__items">
                                <div class="tabheader__item tabheader__item_active">Фитнес</div>
                                <div class="tabheader__item">Премиум</div>
                                <div class="tabheader__item">Постное</div>
                                <div class="tabheader__item">Сбалансированное</div>
                            </div>
                        </div>
                    </div>
                    <div class="preview__life">Живи полной жизнью!</div>
                </div>
            </section>
        `;

        shadow.innerHTML = template;
    }
}

customElements.define('my-preview', MyComponent);