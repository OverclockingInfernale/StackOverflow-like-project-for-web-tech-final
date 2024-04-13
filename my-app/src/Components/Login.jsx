import React from "react"
import { Button, Form } from 'react-bootstrap';

const loginPage = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Control className="m-2" placeholder="email" type="text" />
                <Form.Control className="m-2" placeholder="login" type="text" />
                <Form.Control className="m-2" placeholder="password" type="password" />
            </Form.Group>
        </Form>
    )
}

export default loginPage;