import { FETCH_MOVIES, SEARCH_MOVIE, LOADING } from "../Actions/types";

const initialState = {
    text : '',
    movies : [],
    loading : false,
    movie : []
}


export default function foo(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false,
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
                };
        case LOADING:
            return {
                ...state,
                loading: true
                };
              default:
                return state;
           
    }
}