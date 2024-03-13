// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import CommentItem from './CommentItem';

const CommentList = (props) => {
    return (
        <div>
            {
                props.com?.map(
                    (com) =>
                    <CommentItem com = {com} key = {com.id}/>
                    )
            }
        </div>
    )
}

export default CommentList;
