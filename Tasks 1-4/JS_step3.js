/* Консольное приложение

1) Создать функцию start(), в которой будет валидация на введенный фильм (не пустое значение, не число и не нажал кнопку отмена), 
если значение не валидно, то повторять вопрос.
Вынести логику циклов в отдельные функции rememberMyFilms(), detectedPersonalLevel().

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

*/

function getRightAnswer(question, isNumber) {
    let answer;
    do {
        answer = prompt(question);
    } while (answer === '' || answer === null || (isNumber ? !isNaN(answer) : false));
    return answer;
}

function start() {
    let numberOfFilms = getRightAnswer('Сколько фильмов вы уже посмотрели?', true)

    return Number(numberOfFilms);
}

let numberOfFilms = start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < (personalMovieDB.count === 1 ? 1 : 2); i++) {
        let lastFilm = getRightAnswer('Один из последних просмотренных фильмов?', false);
        let score = getRightAnswer('На сколько оцените его?', true);
        personalMovieDB.movies[lastFilm] = score;
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = getRightAnswer(`Ваш любимый жанр под номером ${i}`, false);
        personalMovieDB.genres[i - 1] = genre;
    }
}

if (personalMovieDB.count > 0) {
    rememberMyFilms();
    writeYourGenres();
    showMyDB(personalMovieDB.privat);
    detectPersonalLevel();
} else {
    console.log('Нужно смотреть фильмы!!');
}
