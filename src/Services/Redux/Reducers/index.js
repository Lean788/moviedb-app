import {combineReducers} from 'redux';
import foo from './searchReducer';

const rootReducer = combineReducers({
    movies:foo
});

export default rootReducer;