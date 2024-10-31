/* Консольное приложение

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"

*/
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        let numberOfFilms;
        do {
            numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
        } while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms));
        this.count = Number(numberOfFilms);
    },

    getRightAnswer: function(question, isNumber) {
        let answer;
        do {
            answer = prompt(question);
        } while (answer === '' || answer === null || (isNumber ? !isNaN(answer) : false));
        return answer;
    },

    rememberMyFilms: function() {
        for (let i = 0; i < (this.count === 1 ? 1 : 2); i++) {
            let lastFilm = this.getRightAnswer('Один из последних просмотренных фильмов?', false);
            let score = this.getRightAnswer('На сколько оцените его?', true);
            this.movies[lastFilm] = score;
        }
    },

    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count <= 30) {
            console.log('Вы классический зритель');
        } else if (this.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(this);
        }
    },

    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre;
            do {
                genre = prompt(`Ваш любимый жанр под номером ${i}`);
            } while (genre === '' || genre === null);
            this.genres[i - 1] = genre;
        }

        this.genres.forEach((genre, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${genre}`);
        });
    }
};

personalMovieDB.start();
if (personalMovieDB.count > 0) {
    personalMovieDB.rememberMyFilms();
    personalMovieDB.writeYourGenres();
    personalMovieDB.showMyDB(personalMovieDB.privat);
    personalMovieDB.detectPersonalLevel();
} else {
    console.log('Нужно смотреть фильмы!!');
}

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
