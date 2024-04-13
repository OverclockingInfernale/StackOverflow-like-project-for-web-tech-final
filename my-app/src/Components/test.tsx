import React from "react";

interface testProps {
    number?: any,
    text?: Text,
}

const Test = ({number, text}: testProps) => {
    return (
        <div>
            test value
        </div>
    )
}

export default Test;