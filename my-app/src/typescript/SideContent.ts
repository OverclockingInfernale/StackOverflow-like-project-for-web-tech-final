export enum SideContentActionTypes {
    FETCH_POSTS = 'FETCH_POSTS'
}

export interface SideContentState {
    sidePosts: any[],
}

interface FetchSideContentAction {
    type: SideContentActionTypes.FETCH_POSTS,
    payload?: any,
}

export type SideContentAction = FetchSideContentAction;