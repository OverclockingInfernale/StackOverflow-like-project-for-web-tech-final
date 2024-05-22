import React, { useContext, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from '../CSS styles/App.css';

const ProfilePage = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.currentUser.user);
    console.log(user);

    return (
        <div>
            <Col lg={8} >
                <Card className="card profile-card shadow text-white">
                    <Card.Body className="card-body text-center text-white">
                        <h5 className="my-3">Profile</h5>
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