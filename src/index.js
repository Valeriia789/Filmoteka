import apiService from './js/apiService.js';
import filmCardTpl from './templates/filmCardTpl.hbs';
import './sass/main.scss';

const moviesList = document.querySelector('.movies-list');

apiService.fetchFilmCards().then(results => {
  appendFilmsMarkup(results);
});

function appendFilmsMarkup (results) {
  console.log(results);
  moviesList.insertAdjacentHTML('beforeend', filmCardTpl(results));
}
