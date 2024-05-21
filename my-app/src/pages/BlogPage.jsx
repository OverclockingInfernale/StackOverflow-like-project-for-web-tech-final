import { Container } from "react-bootstrap"
import { art1, art2, art3, art4, art5, art6 } from "../static/textBodies";


const BlogPage = () => {
    return (
        <Container>
            <h1>Cohesion and Coupling in software engineering</h1>
           <p>{art1}</p>
           <p>{art2}</p>
           <p>{art3}</p>
           <p>{art4}</p>
           <p>{art5}</p>
           <p>{art6}</p>
        </Container>
    )
}

export default BlogPage;