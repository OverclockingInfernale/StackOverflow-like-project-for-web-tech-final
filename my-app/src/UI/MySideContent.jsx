import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS styles/App.css";


const MySideContent = () => {
    return (
        <Container className="side-content">
            <div className="side-title">
            <h3>Zhabr blog</h3>
            </div>
            <Link to="/Blog">Software architecture: Cohesion and Coupling</Link>
        </Container>
    )
}

export default MySideContent;