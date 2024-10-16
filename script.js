let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        this.count = this.getRightAnswer('Сколько фильмов вы уже смотрели?', true)
    },

    getRightAnswer: function(question, isNumber) {
        let answer;
        do {
            answer = prompt(question);
        } while (answer === '' || answer === null || (isNumber ? isNaN(answer) : false));
        return (isNumber ? +answer : answer.trim());
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
            let genre = this.getRightAnswer(`Ваш любимый жанр под номером ${i}`, false);
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