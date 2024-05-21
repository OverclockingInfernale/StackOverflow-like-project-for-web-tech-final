import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CSS styles/App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import MyNavbar from './UI/MyNavbar';
import MySideContent from './UI/MySideContent';
import MySidebar from './UI/MySidebar';
import { AuthContext } from './Context';
import { Provider } from 'react-redux';
import {store} from './redux/root.js';
import TestComponent from './Components/TestComponent.tsx';

const root = ReactDOM.createRoot(document.getElementById('main-cont'));



const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState({ nick: '0', email: '0' })

    return (
        <div>
            <Provider store={store}>
                <AuthContext.Provider value={[
                    isAuth,
                    setIsAuth,
                    user,
                    setUser,
                ]}>
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
                </AuthContext.Provider>
            </Provider>
            <TestComponent></TestComponent>
        </div>
    );
}
root.render(<App></App>)

export default App;
