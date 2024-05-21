import React from 'react'
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS styles/App.css";
import { sideContentI } from './model';
import { art1, art2, art3, art4, art5, art6 } from '../static/textBodies';


const SideContentDisplay = () => {
    const content: sideContentI[] = [
        {id: 1, title: "Software architecture: Cohesion and Coupling", body: art1 + art2 + art3 + art4 + art5 + art6}
    ]

    return (
        <Container className="side-content">
            <div className="side-title">
            <h3>Zhabr blog</h3>
            </div>
            <Link to="/Blog">{content[0].title}</Link>
        </Container>
    )
}

export default SideContentDisplay;