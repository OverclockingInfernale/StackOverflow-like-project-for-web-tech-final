import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../static/logo.png"
import "../CSS styles/App.css";
import LoginPage from '../pages/LoginPage';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context';

const MyNavbar = () => {


    return (
        <Navbar id='navbar1' variant='navbar bg-warning navbar-expand-lg sticky-top'>
            <Container>
                <Navbar.Brand><img className='logo' src={logo} alt='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='btn btn-outline-dark me-2' to="">Home</Link>
                        <Link className='btn btn-outline-dark' to="/posts">Posts</Link>
                    </Nav>
                    <Nav className='ms-auto'>
                       <LoginPage/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default MyNavbar;