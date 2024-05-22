import { Container } from "react-bootstrap"
import { art1, art2, art3, art4, art5, art6 } from "../static/textBodies";


const BlogPage = () => {
    return (
        <Container>
            <h1 className="side-link">Cohesion and Coupling in software engineering</h1>
           <p className="side-link">{art1}</p>
           <p className="side-link">{art2}</p>
           <p className="side-link">{art3}</p>
           <p className="side-link">{art4}</p>
           <p className="side-link">{art5}</p>
           <p className="side-link">{art6}</p>
        </Container>
    )
}

export default BlogPage;