import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './Services/Redux/Reducers/index';
import thunk from 'redux-thunk';

const middleware = [thunk];
const initialState = {};
const store = configureStore({
    reducer: rootReducer,
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(...middleware),
  })



export default store;