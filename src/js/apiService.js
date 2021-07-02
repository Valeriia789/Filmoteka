const API_KEY = 'bc2fa6fd786f6a0d750b3d3cba486c9b';
const BASE_URL = 'https://api.themoviedb.org/';

export default {
  fetchMovieCards () {
    const url = `${BASE_URL}3/trending/movie/week?api_key=${API_KEY}`;

    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(({ results }) => {
        return results;
      })
      .catch(error => console.log(error));
  },

};
