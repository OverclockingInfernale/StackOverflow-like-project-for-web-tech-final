import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SideContentActionCreator from "../redux/actionCreator/SideContentCreator";


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(SideContentActionCreator, dispatch);
}