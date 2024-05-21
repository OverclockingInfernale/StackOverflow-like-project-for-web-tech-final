import { SideContentAction, SideContentActionTypes, SideContentState } from "../typescript/SideContent";

const initialState: SideContentState = {
    sidePosts: [],
}

export const sideContentReducer = (state = initialState, action: SideContentAction): SideContentState => {
    switch (action.type) {
        case SideContentActionTypes.FETCH_POSTS:
            return { sidePosts: [] }
        default:
            return state;
    }
}