import React, { useState } from "react";
import SideContentList from "./SideContentList";
import { sideContentI } from "./model";

export default function SideContent() {
    const [content, setContent] = useState<sideContentI[]>([]);

    return(
        <div>
            <SideContentList/>
        </div>
    )
}

