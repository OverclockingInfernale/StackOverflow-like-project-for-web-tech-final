import React, { useContext, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from '../CSS styles/App.css';
import { useTypedSelector } from "../hooks/useTypedSelector";

const ProfilePage = () => {

    // const user = useSelector((state) => state.currentUser.user);
    const { user, error } = useTypedSelector(state => state.currentUser)
    console.log(user);

    return (
        <div>
            <Col lg={8} >
                <Card className="card profile-card text-center shadow">
                    <Card.Header>
                        <h5 className="my-3">Profile</h5>
                    </Card.Header>
                    <Card.Body className="card-body text-center">
                        <div className="d-block justify-content-center mb-2">
                            <p>{user.nickname}</p>
                            <p>{user.email}</p>
                        </div>
                    </Card.Body>
                    <Card.Footer className="card-body">
                    </Card.Footer>
                </Card>

            </Col>
        </div>
    )
}

export default ProfilePage;