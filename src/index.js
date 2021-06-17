import apiService from './js/apiService.js';
import movieCardTpl from './templates/movieCardTpl.hbs';
import './sass/main.scss';

const moviesList = document.querySelector('.movies-list');

apiService.fetchMovieCards().then(results => {
  appendMoviesMarkup(results);
});

function appendMoviesMarkup (results) {
  console.log(results);
  moviesList.insertAdjacentHTML('beforeend', movieCardTpl(results));
}
