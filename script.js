function getRightAnswer(question, isNumber) {
    let answer;
    do {
        answer = prompt(question);
    } while (answer === '' || answer === null || (isNumber ? isNaN(answer) : false));
    return (isNumber ? +answer : answer.trim());
}

function start() {
    return getRightAnswer('Сколько фильмов вы уже посмотрели?', true);
}

const numberOfFilms = start();

const personalMovieDB = {
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
        let genre = getRightAnswer(`Ваш любимый жанр под номером ${i}`);
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
