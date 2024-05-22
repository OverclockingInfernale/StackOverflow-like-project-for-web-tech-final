import React, { useContext, useState } from "react"
import { Link } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';
import { AuthContext } from "../Context";
import { useDispatch } from "react-redux";

const LoginPage = () => {
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const [isAuth, setIsAuth] = useContext(AuthContext);
    const [user, setUser] = useState({nickname: '', email: '', password: '' });

    const dispatch = useDispatch();

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        const AuthorizedUser = {
            id: Date.now(),
            ...user
        }

        dispatch({type: "AUTHORIZE", current: AuthorizedUser})
        handleClose();
    }

    function isAuthorized() {
        if (isAuth === true) {
            return (
                < Link className='btn btn-outline-light me-2' to="/profile/">{user.nickname}</Link>
            )
        } else {
            return (
                <Button variant='btn btn-outline-light' className='button' onClick={handleShow}>Login</Button>
            )
        }
    }

    return (
        <div>
            {isAuthorized()}

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header className='bg-dark bg-gradient text-white' closeButton>
                    <Modal.Title>
                        LOGIN
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark bg-gradient text-white align-items-center">
                    <Form id="form2" onSubmit={login}>
                        <Form.Group>
                            <Form.Control className="m-2" placeholder="email" type="text"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                            <Form.Control className="m-2" placeholder="login" type="text"
                                value={user.nickname}
                                onChange={(e) => setUser({ ...user, nickname: e.target.value })}
                            />
                            <Form.Control className="m-2" placeholder="password" type="password" />
                        </Form.Group>
                        <Button variant='primary' className='m-3' type='submit'>
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default LoginPage;