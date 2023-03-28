function main() {

  const baseUrl = 'https://api.themoviedb.org/3/movie';

  const getMovie = async () => {
    try {
      const response = await fetch(`${baseUrl}/now_playing?api_key=60f877dbc72b4ac41df74618776c8ae4&language=en-US`);
      console.log(response);
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponseMessage(responseJson.status_message);
      } else {
        renderAllMovies(responseJson.results);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const renderAllMovies = (movies) => {
    const movieListElement = document.querySelector('#movieList');
    movieListElement.innerHTML = '';

    movies.forEach(movie => {
      movieListElement.innerHTML += `
        <div class="card">
          <img class="poster-movie" src="${movie.poster_path}" alt="poster">
          <div class="card-body">
          <h2>coba</h2>
          <p></p>
          </div>
        </div>
      `;
    });
  }

  const responMessage = (message = 'Check your internet connection') => {
    alert(message);
};
};

export default main;