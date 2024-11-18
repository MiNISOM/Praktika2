const btn = document.querySelector('.meal-selection .btn');
const input = document.querySelector('#calloriesInput');

const colors = ['yellow', 'pink', 'green', 'salat', 'purple', 'gray', 'blue'];

const sections = [
    document.querySelector('.cal-1000'),
    document.querySelector('.cal-1500'),
    document.querySelector('.cal-2000'),
    document.querySelector('.cal-2500'),
    document.querySelector('.cal-3000'),
]

window.onload = () => {
    addRandomColors();
    toggleModal();
}

btn.addEventListener('click', () => {
    let value = input.value;
    if(isNaN(value) || value == '') {
        alert('Введите число!');
        return;
    }
/*
    if(value > 3250) {
        alert(`У нас нет меню на ${value} калорий`);
    }*/

    if(value <= 1250)
        addClassToElement(0);
    else if (value <= 1750)
        addClassToElement(1);
    else if (value <= 2250)
        addClassToElement(2);
    else if (value <= 2750)
        addClassToElement(3);
    else if (value > 2750)
        addClassToElement(4);
});

function addClassToElement(index) {
    sections.forEach(e => {
        e.classList.remove('visible');
    });

    sections[index].classList.add('visible');
    sections[index].style.zIndex = '1000';
}

function addRandomColors() {
    const container = document.querySelectorAll('.meal-container');
    container.forEach(e => {
        e.classList.add(colors[randomIntFromInterval(0, colors.length-1)]);
    });
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function toggleModal() {
    const buts = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('section.modal');

    buts.forEach(el => {
        el.addEventListener('click', () => {
            modal.classList.add('visible');

            resetInterval(showModal);
        });
    });

    const cross = document.querySelector('.modal__close');
    cross.addEventListener('click', () => {
        modal.classList.remove('visible');
    });
}