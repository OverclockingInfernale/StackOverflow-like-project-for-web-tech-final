import { combineReducers, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import {currentUserReducer} from "./currentUserReducer";
import { userReducer } from "./userReducer";


const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    user: userReducer
})


// const enhancers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );

export const store = configureStore({reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()});