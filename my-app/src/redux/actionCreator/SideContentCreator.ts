import axios from "axios"
import { SideContentAction, SideContentActionTypes } from "../../typescript/SideContent.ts"
import { Dispatch } from "redux"


export const fetchSideContent = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<SideContentAction>) => {
        try {
            dispatch({ type: SideContentActionTypes.FETCH_POSTS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: { _page: page, _limit: limit }
            })
            setTimeout(() => {
                dispatch({ type: SideContentActionTypes.FETCH_POSTS_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({
                type: SideContentActionTypes.FETCH_POSTS_ERROR,
                payload: 'Error occured while fetching side content'
            })
        }
    }
}

export const setContentPage = (page: number) => {
    return{type: SideContentActionTypes.SET_PAGE, payload: page}
}