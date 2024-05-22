import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CSS styles/App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import MyNavbar from './UI/MyNavbar.jsx';
import MySideContent from './UI/MySideContent.jsx';
import MySidebar from './UI/MySidebar.jsx';
import { AuthContext } from './Context/index.js';
import { Provider } from 'react-redux';
import {store} from './redux/root.ts';
import TestComponent from './Components/TestComponent.tsx';
import SideContentItem from './typescript/SideContentItem.tsx';
import SideContent from './typescript/SideContent.tsx';

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
                                <SideContent/>
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
