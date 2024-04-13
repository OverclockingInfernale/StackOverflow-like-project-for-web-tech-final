import { Button, Card, Modal, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommentList from './CommentList';
import ReactDOM from 'react-dom/client';
import '../CSS styles/App.css';

const PostItem = (props) => {

    const router = useNavigate()

    return (
        <div className='post'>
             <Card border='warning' className='card-post bg-dark text-white'>
                <Card.Body>
                    <Card.Title className='clickable-title'>
                        <a onClick={() => router(`/posts/${props.post.id}`)}>
                        {props.post.title}
                        </a>
                        </Card.Title>
                    <Card.Text>{props.post.body}</Card.Text>       
                </Card.Body>
                <Card.Footer>
               
                    <Button className='m-2' variant='outline-danger' onClick={() => props.del(props.post)}>
                        <span className='material-symbols-outlined'>
                            delete
                        </span>
                    </Button>
                </Card.Footer>
            </Card>  
        </div>
    )
};

export default PostItem;