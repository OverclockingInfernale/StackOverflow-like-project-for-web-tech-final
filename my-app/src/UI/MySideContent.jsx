import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS styles/App.css";


const MySideContent = () => {
    return (
        <Container className="side-content">
            <h3>Zhabr blog</h3>
            <Link to="/Blog">Software architecture: Cohesion and Coupling</Link>
        </Container>
    )
}

export default MySideContent;