import { SideContentAction, SideContentActionTypes, SideContentState } from "../typescript/SideContent";

const initialState: SideContentState = {
    sidePosts: [],
    error: null
}

export const sideContentReducer = (state = initialState, action: SideContentAction): SideContentState => {
    switch (action.type) {
        case SideContentActionTypes.FETCH_POSTS:
            return { sidePosts: [], error: null}
        case SideContentActionTypes.FETCH_POSTS_ERROR:
            return {sidePosts: [], error: action.payload}
        default:
            return state;
    }
}