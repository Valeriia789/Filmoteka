import apiService from './apiService.js';
import movieCardTpl from '../templates/movieCardTpl.hbs';

const moviesList = document.querySelector('.js-main-list');
const homeBtn = document.querySelector('.js-home-btn');

renderMoviesCards();

homeBtn.addEventListener('click', onHomeBtnClick);

function appendMoviesMarkup (results) {
  console.log(results);
  moviesList.insertAdjacentHTML('beforeend', movieCardTpl(results));
}

function renderMoviesCards () {
  apiService.fetchMovieCards().then(results => {
    appendMoviesMarkup(results);
  });
}

function onHomeBtnClick (e) {
  e.preventDefault();
  renderMoviesCards();
}



