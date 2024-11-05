setTimeout(() => {
    main();
}, 1000);

function main() {
    addTabheaderFunctionality();
    changeCalcBlocks();
    addEventsOnInputsAndButs();
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

function changeCalcBlocks() {
    let elements = [ 
        document.querySelectorAll('.calculating__choose#gender .calculating__choose-item'), 
        
        document.querySelectorAll('.calculating__choose_big .calculating__choose-item') 
    ]

    elements.forEach(el => {
        addClickEvent(el, 'calculating__choose-item_active');
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

function addEventsOnInputsAndButs() {
    const calcItems = document.querySelectorAll('input.calculating__choose-item');
    
    calcItems.forEach(el => {
        el.addEventListener('blur', () => {
            printCalories();
        });
    });

    const items = document.querySelectorAll('.calculating__choose#gender .calculating__choose-item, .calculating__choose_big .calculating__choose-item');
    items.forEach(el => {
        el.addEventListener('click', () => {
            printCalories();
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