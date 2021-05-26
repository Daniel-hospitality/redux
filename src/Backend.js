import axios from "axios";

const client = axios.create({
  method: "GET",
  mode: "cors",
  baseURL: "http://localhost:8080"
});
const requests = {
  fetchMovies: (movieId) => client.get(`/movies/${movieId}`),
  fetchGenres: (genres) => client.get(`/movies/genres?with_genres=${genres}`),
};

export default requests;