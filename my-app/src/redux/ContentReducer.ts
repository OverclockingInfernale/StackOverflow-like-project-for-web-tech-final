import { act } from "react-dom/test-utils";
import { SideContentAction, SideContentActionTypes, SideContentState } from "../typescript/SideContent";

const initialState: SideContentState = {
    sidePosts: [],
    error: null,
    page: 1,
    limit: 10
}

export const sideContentReducer = (state = initialState, action: SideContentAction): SideContentState => {
    switch (action.type) {
        case SideContentActionTypes.FETCH_POSTS:
            return {...state, sidePosts: [], error: null }
        case SideContentActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, sidePosts: action.payload, error: null }
        case SideContentActionTypes.FETCH_POSTS_ERROR:
            return {...state, sidePosts: [], error: action.payload }
        case SideContentActionTypes.SET_PAGE:
            return { ...state, page: action.payload }
        default:
            return state;
    }
}