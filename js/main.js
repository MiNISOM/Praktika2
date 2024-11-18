setTimeout(() => {
    main();
}, 1000);

function main() {
    addTabheaderFunctionality();
    addCalculateEvents();
    addTimerForSale();
    addEventsOnCallUs();
    window.addEventListener('scroll', scrollEvent);
}

function scrollEvent() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        const modal = document.querySelector('section.modal');
        modal.classList.add('visible');

        window.removeEventListener('scroll', scrollEvent);
        setTimeout(() => {
            window.addEventListener('scroll',scrollEvent);
        }, 1000 * 60 * 5); // 5 minutes
    }
}

function addEventsOnCallUs() {
    let butsElements = document.querySelectorAll('button.btn');
    const buts = Array.from(butsElements).filter(el => el.textContent.includes('Связаться с нами'));
    toggleClassOnClickToElement(buts, 'section.modal','visible');

    const cross = document.querySelectorAll('.modal__close');
    toggleClassOnClickToElement(cross, 'section.modal', 'visible');
}

function addTimerForSale() {
    const daysElement = document.querySelector('#days');
    const hoursElement = document.querySelector('#hours');
    const minutesElement = document.querySelector('#minutes');
    const secondsElement = document.querySelector('#seconds');

    const timer = setInterval(() => {
        const remainingTime = getTimeRemaining("2024-12-01");

        if(remainingTime === 0) {
            daysElement.innerHTML = 0;
            hoursElement.innerHTML = 0;
            minutesElement.innerHTML = 0;
            secondsElement.innerHTML = 0;
            clearInterval(timer);
            return;
        }

        daysElement.innerHTML = remainingTime.days;
        hoursElement.innerHTML = remainingTime.hours;
        minutesElement.innerHTML = remainingTime.minutes;
        secondsElement.innerHTML = remainingTime.seconds;
    }, 1000);
}

function addCalculateEvents() {
    const elements = [ 
        document.querySelectorAll('.calculating__choose#gender .calculating__choose-item'), 
        
        document.querySelectorAll('.calculating__choose_big .calculating__choose-item') 
    ]

    elements.forEach(el => {
        addClickEvent(el, 'calculating__choose-item_active');
    });


    const inputs = document.querySelectorAll('input.calculating__choose-item');
    
    inputs.forEach(el => {
        el.addEventListener('input', () => {
            printCalories();
        });
    });

    elements.forEach(el => {
        el.forEach(e => {
            e.addEventListener('click', () => {
                printCalories();
            });
        });
    });
}

function addTabheaderFunctionality() {
    const tabItems = document.querySelectorAll('.preview .tabheader__item');
    const tabContents = document.querySelectorAll('.preview .tabcontent');

    tabItems.forEach( (el, index) => {
        el.addEventListener('click', () => {
            tabItems.forEach(e => {
                e.classList.remove('tabheader__item_active');
            });
            el.classList.add('tabheader__item_active');
            
            tabContents.forEach(e => {
                e.classList.remove('tabcontent_active');
            });
            document.querySelector(`.preview .tabcontent:nth-child(${index+1})`).classList.add('tabcontent_active');
        })
    });
}

function addClickEvent(arr, className) {
    arr.forEach(el => {
        el.addEventListener('click', () => {
            arr.forEach(e => {
                e.classList.remove(className);
            });
            el.classList.add(className);
        });
    });
}

function printCalories() {
    const calcItems = document.querySelectorAll('input.calculating__choose-item');

    let isValidValue = true;
    calcItems.forEach(e => {
        if(isNaN(e.value) || e.value === '') {
            isValidValue = false;
            return;
        }
    });

    const calcRes = document.querySelector('.calculating__result span');
    if(isValidValue) {
        const bmr = calcCalories();
        calcRes.innerHTML = Math.round(bmr);
    } else {
        calcRes.innerHTML = '0';
    }
}

function calcCalories() { // Calculate Calories
    const calcItems = document.querySelectorAll('input.calculating__choose-item');
    const height = calcItems[0].value;
    const weight = calcItems[1].value;
    const age = calcItems[2].value; 

    let bmr = 0;
    if(document.querySelector('.calculating__choose .calculating__choose-item').
    classList.contains('calculating__choose-item_active')) {
        // For female
        bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    } else {
        // For male
        bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    }

    // Getting k by activity
    const calcChooseBigItems = document.querySelectorAll('.calculating__choose_big .calculating__choose-item');

    let i = 0;
    calcChooseBigItems.forEach( (el, index) => {
        if(el.classList.contains('calculating__choose-item_active')) {
            i = index
            return;
        } 
    });

    const k = i == 0 ? 1.2 
        : i == 1 ? 1.375 
        : i == 2 ? 1.55
        : 1.725;
    
    return bmr*k;
}

function getTimeRemaining(endDate) {
    const now = new Date();
    const end = new Date(endDate);
    const timeDifference = end - now;

    if (timeDifference <= 0) {
        return 0;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

/**
 * Функция для добавления класса с значением className определенному element по нажатию элементов elementsToClick.
 * @param {HTMLElement} elementsToClick - Элементы к которым нужно добавить event onClick.
 * @param {HTMLElement} element -Элемент, которому нужно добавить определенный класс
 * @param {className} className -Имя класса
 */
function toggleClassOnClickToElement(elementsToClick, element, className) {
    elementsToClick.forEach(el => {
        el.addEventListener('click', () => {
            document.querySelector(element).classList.toggle(className);
        });
    });
}