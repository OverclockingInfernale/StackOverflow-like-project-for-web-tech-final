import { UserAction, UserActionsTypes, UserStateI } from "./userTypes";

const defaultState: UserStateI = {
    user: [],
    error: null
};

const AUTHORIZE = "AUTHORIZE";

export const currentUserReducer = (state = defaultState, action: UserAction) => {
    switch (action.type) {
        case UserActionsTypes.AUTHORIZE:
            console.log('authorized');
            return {
                ...state,
                user: action.payload
            }
        default: {
            return state;
        }
    }

}