import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import {currentUserReducer} from "./currentUserReducer";
import {userReducer} from "./userReducer";


const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    userList: userReducer,
})

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export const store = legacy_createStore(rootReducer, enhancers);
