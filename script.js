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


const add = document.querySelector('.promo__adv');
add.style.display = 'none'
const genre = document.querySelector('.promo .promo__genre')
genre.innerHTML = 'ДРАМА'
const bg = document.querySelector('.promo__bg')
bg.style.backgroundImage = 'url("img/bg.jpg")'


const movieList = document.getElementById('movieList');

addFilms()

const button = document.querySelector('form.add button')
button.addEventListener('click', (event) => {
    event.preventDefault()

    let input = document.querySelector('.adding__input')
    let str = input.value
    if(str == '')
        return

    str = str.length > 21 ? str.slice(0, 21) + '...' : str

    if(document.querySelector('form.add input.checkbox').checked) 
        console.log('Добавляем в издранное...');

    deleteFilms()
    movieDB.movies.push(str)
    addFilms()

    addEventOnFilms()
})

function addEventOnFilms() {
    let deleteButs = document.querySelectorAll('.promo__interactive-list .delete')
    deleteButs.forEach(el => {
        el.addEventListener('click', () => {
            deleteFilm(el.parentElement.textContent.slice(3, el.parentElement.textContent.length).trim())
            deleteFilms()
            addFilms()
            addEventOnFilms()
        })
    });
}

addEventOnFilms()