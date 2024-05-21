import axios from "axios"
import { SideContentAction, SideContentActionTypes } from "../../typescript/SideContent"
import { Dispatch } from "redux"


export const fetchSideContent = () => {
    return async (dispatch: Dispatch<SideContentAction>) => {
        try {
            dispatch({type: SideContentActionTypes.FETCH_POSTS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setTimeout(() => {
                dispatch({type: SideContentActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: SideContentActionTypes.FETCH_POSTS_ERROR,
                payload: 'Error occured while fetching side content'
            })
        }
    }
}