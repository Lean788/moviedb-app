import { FETCH_MOVIES, SEARCH_MOVIE } from "./types";
import axios from 'axios';
import APIkey from '../../../Components/APIkey';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};


export const fetchMovies = text => dispatch => {
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${APIkey}&s=${text}`)
    .then(response => dispatch ({
        type: FETCH_MOVIES,
        payload: response.data
    }))
    .catch(err => console.log(err))
}