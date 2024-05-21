import React, { useState } from "react";
import SideContentList from "./SideContentList";
import { sideContentI } from "./model";

const SideContent = () => {
    const [content, setContent] = useState<sideContentI>([''])

    return(
        <SideContentList/>
    )
}

export default SideContent;