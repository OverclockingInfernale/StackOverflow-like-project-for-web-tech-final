import { Button, Card, Modal, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import CommentList from './CommentList';
import ReactDOM from 'react-dom/client';


const PostItem = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [comment, setNewComment] = useState({ username: '', text: '' });

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const AddNewComment = (e) => {
        e.preventDefault();

        const newComment = {
            ...comment, id: Date.now()
        }
        props.newcom(props.post.id, newComment);
        setNewComment({username: '', text: ''});
        handleClose();
    }

    return (
        <div className='post'>
             <Card border='warning' className='card-post bg-dark text-white'>
                <Card.Body>
                    <Card.Title>{props.post.title}</Card.Title>
                    <Card.Text>{props.post.body}</Card.Text>       
                </Card.Body>
                <Card.Footer>
                <Button variant='outline-primary' onClick={handleShow}>
                    <span className='material-symbols-outlined'>
                        comment
                    </span>
                </Button>
                    <Button className='m-2' variant='outline-danger' onClick={() => props.del(props.post)}>
                        <span className='material-symbols-outlined'>
                            delete
                        </span>
                    </Button>
                </Card.Footer>
            </Card>  

             <Modal show={showModal} onHide={handleClose}>
            <Modal.Header className='bg-dark bg-gradient text-white' closeButton>
                <Modal.Title>Comment</Modal.Title>
                    </Modal.Header>
                     <Modal.Body className='bg-dark bg-gradient text-white align-items-center'>
                        <Form id='form1' onSubmit={AddNewComment}>
                        <Form.Group>
                            <Form.Control
                                className='m-2'
                                value={comment.username}
                                onChange={(e) => setNewComment({...comment, username: e.target.value})}
                                type='text'
                                placeholder='Username'
                            />

                            <Form.Control
                                className='m-2'
                                value={comment.text}
                                onChange={(e) => setNewComment({...comment, text: e.target.value})}
                                type='text'
                                placeholder='...'
                            />

                            </Form.Group>
                            <Button variant='primary' className='m-3' type='submit'>
                                Add
                            </Button>
                            </Form>
                </Modal.Body>
                </Modal>
        </div>
    )
};

export default PostItem;