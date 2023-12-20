import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const CommentItem = (props) => {
    const [solution, setSolution] = useState(true);
    const markAsSolution = () => setSolution(false);

    return (
        <div className='post'>
             <Card border='secondary' className='card-post bg-dark text-white ms-2'>
                <Card.Body>
                    <Card.Title>{props.com.username}</Card.Title>
                    <Card.Text>{props.com.text}</Card.Text>
                    
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