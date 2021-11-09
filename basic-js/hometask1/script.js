let numberOfFilms;

while(!numberOfFilms || numberOfFilms === null || numberOfFilms.length === 0 || numberOfFilms.length > 50) {
    numberOfFilms = +prompt('Сколько фильмов посмотрели ?', '');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastOfWatchedFilms;
let ratingLastOfWatchedFilms;

for (let i = 0; i < 2; i++) {
    lastOfWatchedFilms = null;
    ratingLastOfWatchedFilms = null;
    while (
        !lastOfWatchedFilms || lastOfWatchedFilms === null || lastOfWatchedFilms.length === 0 ||
        lastOfWatchedFilms.length > 50
        ) {
            lastOfWatchedFilms = prompt('Последний фильм, который посмотрели ?', '');
        }
    while (
        !ratingLastOfWatchedFilms || ratingLastOfWatchedFilms === null ||
        ratingLastOfWatchedFilms.length === 0 || ratingLastOfWatchedFilms.length > 50
        ) {
            ratingLastOfWatchedFilms = +prompt('На сколько оцените его ?', '');
        }
    personalMovieDB.movies[lastOfWatchedFilms] = ratingLastOfWatchedFilms;
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}