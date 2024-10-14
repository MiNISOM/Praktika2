/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту
*/

'use strict';


function addFilms() {
    movieDB.movies = movieDB.movies.sort()

    for (let i = 0; i < movieDB.movies.length; i++) {
        // Я знаю что здесь можно было сделать чекрез шаблонную строку, 
        // но потом не работает метод для удаления этих элементов

        const li = document.createElement('li');
        li.classList.add('promo__interactive-item');
        li.innerHTML = `${i+1}) ${movieDB.movies[i].toUpperCase()}
                        <div class="delete"></div>`;
        movieList.appendChild(li);
    }
}

function deleteFilms() {
    let ul = document.querySelector('#movieList')
    ul.innerHTML = ''
}

function deleteFilm(film) {
    for (let i = 0; i < movieDB.movies.length; i++) {
        const element = movieDB.movies[i];

        if(element.toUpperCase() == film) {
            movieDB.movies.splice(i, 1);
            return
        }
    }
}

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const add = document.querySelector('.promo__adv'),
    genre = document.querySelector('.promo .promo__genre'),
    bg = document.querySelector('.promo__bg'),
    movieList = document.getElementById('movieList'),
    button = document.querySelector('form.add button'),
    form = document.querySelector('form.add');

add.style.display = 'none';
genre.innerHTML = 'ДРАМА';
bg.style.backgroundImage = 'url("img/bg.jpg")';


addFilms();

form.submit = (event) => {
    // Something
}

button.addEventListener('click', (event) => {
    event.preventDefault();

    let input = document.querySelector('.adding__input');
    let str = input.value;
    if(!str)
        return;

    str = str.length > 21 ? str.slice(0, 21) + '...' : str;

    const checkbox = document.querySelector('form.add input.checkbox');
    if(checkbox.checked) 
        console.log('Добавляем в издранное...');

    deleteFilms();
    movieDB.movies.push(str);
    addFilms();

    addEventOnFilms();

    form.reset();
    form.submit(event);
})

function addEventOnFilms() {
    let deleteButs = document.querySelectorAll('.promo__interactive-list .delete');
    deleteButs.forEach(el => {
        el.addEventListener('click', () => {
            deleteFilm(el.parentElement.textContent.slice(3, el.parentElement.textContent.length).trim());
            deleteFilms();
            addFilms();
            addEventOnFilms();
        })
    });
}

addEventOnFilms()