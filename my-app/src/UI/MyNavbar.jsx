import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import logo from "../static/logo.png"
import "../CSS styles/App.css";

const MyNavbar = () => {

    return (
        <Navbar id='navbar1' variant='navbar bg-warning navbar-expand-lg sticky-top'>
            <Container>
                <Navbar.Brand><img className='logo' src={logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-3">
                        <Link className='btn btn-outline-dark' to="">Home</Link>
                    </Nav>
                    <Nav className='me-auto'>
                        <Link className='btn btn-outline-dark' to="/posts">Posts</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;