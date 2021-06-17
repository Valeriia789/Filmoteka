const API_KEY = '44d74a10460e9a32f8546bed31d47780';
const BASE_URL = 'https://api.themoviedb.org/';

export default {
  fetchFilmCards () {
    const url = `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}`;

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
