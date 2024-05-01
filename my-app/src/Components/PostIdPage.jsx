import { Button, Card, Modal, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import CommentList from './CommentList';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import '../CSS styles/App.css';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])


    const [showModal, setShowModal] = useState(false);
    const [comment, setNewComment] = useState({ email: '', body: '' });

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const AddNewComment = (e) => {
        e.preventDefault();

        const newComment = {
            ...comment, id: Date.now()
        }

        setComments([...comments, newComment])
        setNewComment({ username: '', text: '' });
        handleClose();
    }

    return (
        <div className='post mt-4'>
            <Card border='warning' className='card-post bg-dark text-white'>
                <Card.Body>
                    <Card.Title className='card-text'>{post.title}</Card.Title>
                    <Card.Text className='card-text'>{post.body}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant='outline-primary' onClick={handleShow}>
                        <span className='material-symbols-outlined'>
                            comment
                        </span>
                    </Button>
                </Card.Footer>
            </Card>
            <CommentList com={comments} key={comments.id} />

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
                                onChange={(e) => setNewComment({ ...comment, email: e.target.value })}
                                type='text'
                                placeholder='Username'
                            />

                            <Form.Control
                                className='m-2'
                                value={comment.text}
                                onChange={(e) => setNewComment({ ...comment, body: e.target.value })}
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
}

export default PostIdPage;