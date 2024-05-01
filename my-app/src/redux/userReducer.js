import React from "react";
import { createStore, legacy_createStore } from "redux";

const defaultState = {
    users: ["Unknown"]
};

const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

export const userReducer = (state = defaultState, action) => {
    // switch(action.type){
    //     case ADD_USER:
    //         return {...state, users: [...state.users, action.credentials]}
    // }
    return null;
}
