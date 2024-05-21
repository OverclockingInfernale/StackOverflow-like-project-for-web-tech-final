import React, { useContext, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { userReducer } from "../redux/userReducer.js";
import { useDispatch, useSelector } from "react-redux";
import styles from '../CSS styles/App.css';

const ProfilePage = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.currentUser.user);
    // const email = useSelector(state => state.user.email)
    console.log(user)

    return (
        <div>
            <Col lg={8} >
                <Card className="card profile-card shadow text-white">
                    <Card.Body class="card-body text-center text-white">
                        <h5 class="my-3">Profile</h5>
                        <div class="d-block justify-content-center mb-2">
                            <p>{user.nickname}</p>
                            <p>{user.email}</p>
                        </div>
                    </Card.Body>
                    <Card.Footer className="card-body text-white">
                        {/* <ul class="list-group list-group-flush rounded-3 shadow">
                            <li class="profile-list">
                                <p class="profile-text">Posts created:</p>
                            </li>
                            <li class="profile-list">
                                <p class="profile-text">Something: </p>
                            </li>
                            <li class="profile-list">
                                <p class="profile-text">Something: </p>
                            </li>
                        </ul> */}
                    </Card.Footer>
                </Card>

            </Col>
        </div>
    )
}

export default ProfilePage;