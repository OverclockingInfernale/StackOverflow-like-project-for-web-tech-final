import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CSS styles/App.css';
import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import MyNavbar from './UI/MyNavbar';
import MySideContent from './UI/MySideContent';
import MySidebar from './UI/MySidebar';

const root = ReactDOM.createRoot(document.getElementById('main-cont'));



const App = () => {

    return (
        <div>
            <BrowserRouter>
                <MyNavbar />
                <Row>
                <MySidebar />
                    <Col xs={6}>
                        <Container>
                            <AppRouter />
                        </Container>
                    </Col>
                    <Col>
                        <MySideContent />
                    </Col>

                </Row>
            </BrowserRouter>
        </div>
    );
}
root.render(<App></App>)

export default App;
