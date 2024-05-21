import React from "react";

interface testProps {
    number?: any,
    text?: Text,
}

const TestComponent = ({number, text}: testProps) => {
    return (
        <div>
            test value
        </div>
    )
}

export default TestComponent;