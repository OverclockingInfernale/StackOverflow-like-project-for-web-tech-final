import React from 'react'
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS styles/App.css";


interface SideContentItemProps {
    id?: number,
    title?: string,
    body?: string,
}

const SideContentItem = ({ id, title, body }: SideContentItemProps) => {


    return (
        <div>
            <p className='side-link'>{title}</p>
            <hr></hr>
        </div>
    )
}

export default SideContentItem;