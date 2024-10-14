function getRightAnswer(question) {
    let ask = prompt(question)
    while (ask == '' && ask.length > 50) {
        ask = prompt(question)
    }

    return ask
}

const numberOfFilms = +getRightAnswer('Сколько фильмов вы уже посмотрели?')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

if(numberOfFilms > 0) {
    for (let i = 0; i < (numberOfFilms === 1 ? 1 : 2); i++) {
        let lastFilm = getRightAnswer('Один из последних просмотренных фильмов?')
        let score = prompt('На сколько оцените его?')

        personalMovieDB.movies[`${lastFilm}`] = score
    }

    console.log(personalMovieDB.movies);
} else  {
    console.log('Нужно смотреть фильмы!!');
}

if(personalMovieDB.count < 10)
    console.log('Просмотрено довольно мало фильмов');
else if(personalMovieDB.count  > 10 && personalMovieDB.count <= 30)
    console.log('Вы классический зритель');
else if(personalMovieDB.count > 30)
    console.log('Вы киноман');
else 
    console.log('Произошла ошибка');

/*
First cicle
let i = 0
while (i < (numberOfFilms === 1 ? 1 : 2)) {
    let lastFilm = getRightAnswer('Один из последних просмотренных фильмов?')
    let score = prompt('На сколько оцените его?')

    personalMovieDB.movies[`${lastFilm}`] = score 
    
    i++
}

Second cicle
let i = 0
do {
    let lastFilm = getRightAnswer('Один из последних просмотренных фильмов?')
    let score = prompt('На сколько оцените его?')

    personalMovieDB.movies[`${lastFilm}`] = score

    i++
} while(i < (numberOfFilms === 1 ? 1 : 2)) */