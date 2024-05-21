import { combineReducers, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import {currentUserReducer} from "./currentUserReducer";
// import { sideContentReducer } from "./ContentReducer";


export const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    // sideContent: sideContentReducer
})

export type rootState = ReturnType<typeof rootReducer>


// const enhancers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );

export const store = configureStore({reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()});