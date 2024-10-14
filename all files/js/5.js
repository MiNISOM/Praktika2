/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1
const add = document.querySelector('.promo__adv'),
    genre = document.querySelector('.promo .promo__genre'),
    bg = document.querySelector('.promo__bg'),
    movieList = document.getElementById('movieList');

add.style.display = 'none'

//2
genre.innerHTML = 'ДРАМА'

//3
bg.style.backgroundImage = 'url("img/bg.jpg")'

//4, 5

movieDB.movies = movieDB.movies.sort()

for (let i = 0; i < movieDB.movies.length; i++) {
    movieList.innerHTML += `
        <li class="promo__interactive-item">
            ${i+1}) ${movieDB.movies[i].toUpperCase()}
            <div class="delete"></div>
        </li>
    `;
}