export enum SideContentActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    SET_PAGE = 'SET_PAGE'
}

export interface SideContentState {
    sidePosts: any[],
    error: null | string,
    page: number,
    limit: number
}


interface FetchSideContentAction {
    type: SideContentActionTypes.FETCH_POSTS,
    payload?: any,
}

interface FetchSuccessSideContentAction{
    type: SideContentActionTypes.FETCH_POSTS_SUCCESS,
    payload?: any
}

interface FetchErrorSideContentAction {
    type: SideContentActionTypes.FETCH_POSTS_ERROR,
    payload?: any
}

interface SetPageAction{
    type: SideContentActionTypes.SET_PAGE,
    payload?: any
}

export type SideContentAction = FetchSideContentAction | FetchErrorSideContentAction | FetchSuccessSideContentAction | SetPageAction;