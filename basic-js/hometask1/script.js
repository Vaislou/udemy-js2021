let numberOfFilms = +prompt('Сколько фильмов посмотрели ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstOfLastOfWatchedFilms = prompt('Последний фильм, который посмотрели ?', '');
let firstOfRatingLastOfWatchedFilms = +prompt('На сколько оцените его ?', '');

personalMovieDB.movies[firstOfLastOfWatchedFilms] = firstOfRatingLastOfWatchedFilms;

let secondOfLastOfWatchedFilms = prompt('Последний фильм, который посмотрели ?', '');
let secondOfRatingLastOfWatchedFilms = +prompt('На сколько оцените его ?', '');

personalMovieDB.movies[secondOfLastOfWatchedFilms] = secondOfRatingLastOfWatchedFilms;

console.log(personalMovieDB);