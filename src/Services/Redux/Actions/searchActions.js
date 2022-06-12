import { FETCH_MOVIES, SEARCH_MOVIE } from "./types";
import axios from 'axios';
import APIkey from '../../../Components/APIkey';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

console.log(APIkey);

export const fetchMovies = text => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${APIkey}&query=${text}&language=es-ES&append_to_response=images&include_image_language=es,null`)
    .then(response => dispatch ({
        type: FETCH_MOVIES,
        payload: response.data
    }))
    .catch(err => console.log(err))
}