import { Button, Card, Modal, Form } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommentList from './CommentList';
import ReactDOM from 'react-dom/client';
import '../CSS styles/App.css';

const PostItem = (props) => {
    const [votes, setVotes] = useState(0);
    const router = useNavigate()
    const ref = useRef();

    function increment() {
        setVotes(votes + 1)
    }

    function decrement() {
        setVotes(votes - 1)
    }

    // useEffect(() => {
    //     if (ref.current) {
    //         setTimeout(() => ref.current.scrollIntoView({ inline: "center", }), 777);
    //     }
    // }, []);

    return (
        <div className='post'>
            <Card className='card-post' ref={ref}>
                <Card.Header>
                    <Card.Title className='clickable-title'>
                        <a onClick={() => router(`/posts/${props.post.id}`)}>
                            {props.post.title}
                        </a>
                    </Card.Title>
                </Card.Header>
                <Card.Body>

                    <Card.Text className='card-text'>{props.post.body}</Card.Text>
                </Card.Body>
                <Card.Footer>

                    <Button className='me-2' variant='outline-danger' onClick={() => props.del(props.post)}>
                        <span className='material-symbols-outlined'>
                            delete
                        </span>
                    </Button>
                    <span class="material-symbols-outlined" onClick={increment}>
                        arrow_drop_up
                    </span>

                    <span className='votes'>
                        {votes}
                    </span>

                    <span class="material-symbols-outlined expand-less" onClick={decrement}>
                        arrow_drop_down
                    </span>
                </Card.Footer>
            </Card>
        </div>
    )
};

export default PostItem;