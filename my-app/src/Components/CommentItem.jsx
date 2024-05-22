import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../CSS styles/App.css";


const CommentItem = (props) => {
    const [solution, setSolution] = useState(true);
    const markAsSolution = () => setSolution(false);
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            setTimeout(() => ref.current.scrollIntoView({ inline: "center", }), 777);
        }
    }, []);

    return (
        <div className='card-post' ref={ref}>
             <Card border='secondary' className='card-post ms-2'>
                    
                <Card.Header>
                <Card.Title className='card-title'>{props.com.email}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{props.com.body}</Card.Text>
                    
                </Card.Body>
                <Card.Footer>
                    {solution?
                    <Button variant='outline-success' onClick={markAsSolution}>
                        <span className='material-symbols-outlined'>done</span>
                    </Button>:

                <div>
                    <Button variant='success'>
                        <span className='material-symbols-outlined'>done</span>
                    </Button>
                        <Card.Text>marked as solution</Card.Text>
                </div>
                    }  
                </Card.Footer>
            </Card>  
        </div>
    );
};

export default CommentItem;