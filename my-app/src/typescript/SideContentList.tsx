import React from 'react'
import { useTypedSelector } from "../hooks/useTypedSelector";


const SideContentList: React.FC = () => {
    const {user} = useTypedSelector(state => state.currentUser)
    return(
        <div>
            
    </div>);
};

export default SideContentList;