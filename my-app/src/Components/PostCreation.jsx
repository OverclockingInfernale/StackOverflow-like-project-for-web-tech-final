import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

const PostCreation = ({create}) => {
   
    const [post, setPost] = useState({title: '', body: ''
    });
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const addNewPost = (e) =>{
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''})
        handleClose();
        console.log(newPost);
    }

   

    return (
        <div>
            <Row className='mb-2'>
                <Col>
                    <h2 className='header1 m-1'>All questions</h2>
                </Col>
                <Col>
                    <Button variant='outline-warning' className='addButton m-3' onClick={handleShow}>Ask a question</Button>
                </Col>
            </Row>
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header className='bg-dark bg-gradient text-white' closeButton>
            <Modal.Title>Add New Post</Modal.Title>
                </Modal.Header>
                 <Modal.Body className='bg-dark bg-gradient text-white align-items-center'>
                    <Form id='form1' onSubmit={addNewPost}>
                    <Form.Group>
                        <Form.Control
                            className='m-2'
                            value={post.title}
                            onChange={(e) => setPost({...post, title: e.target.value})}
                            type='text'
                            placeholder='Enter title'
                        />

                        <Form.Control
                            className='m-2'
                            value={post.body}
                            onChange={(e) => setPost({...post, body: e.target.value})}
                            type='text'
                            placeholder='Enter description'
                            as='textarea'
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
}

export default PostCreation;