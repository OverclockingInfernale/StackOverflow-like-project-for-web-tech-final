import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CSS styles/App.css';
import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import PostList from './Components/PostList';
import PostCreation from './Components/PostCreation';
import CommentList from './Components/CommentList';
import PostSearch from './Components/PostSearch';

const root = ReactDOM.createRoot(document.getElementById('main-cont'));



const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: "Post 1", 
        body: "Here goes first description",
        comments: [
            {
                id: 1,
                username: "user@123",
                text: "The topic is cool"
            },
            {
                id: 2,
                username: "SillyCat",
                text: "Your opinion is cool, however I live in your walls"
            }
        ]
    },
        {id: 2, title: "Post 2", 
        body: "Another description",
        comments: [
            {
                id: 1,
                username: "Timur Inamhozhaev",
                text: "Glory to the Uzbekistan"
            },
            {
                id: 2,
                username: "Peppino",
                text: "spaghetti"
            }
        ]
        },
    ]);

    const [filter, setFilter] = useState({query: ''})

    const searchPosts = useMemo(
        () => {
            return posts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
        }, [filter.query, posts]
    )
   
    const handleCommentSubmit = (postId, newCom) =>{
        const postIndex = posts.findIndex(post => post.id === postId);
        if (postIndex !== -1) {
            const updatedPost = {
                ...posts[postIndex],
                comments: [
                    ...posts[postIndex].comments,
                    {
                        id: Date.now(),
                        username: newCom.username,
                        text: newCom.text,
                    }
                ]
            };
    
            const updatedPosts = [
                ...posts.slice(0, postIndex),
                updatedPost,
                ...posts.slice(postIndex + 1),
            ];

            setPosts(updatedPosts);

        }
    }

   
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const deletePost = (post) => {
        console.log(posts.comments);
        setPosts(posts.filter(p => p.id !== post.id));
    }

    

    
        return(
            <div> 
                <Container fluid>
            <Row>
            <Navbar id='navbar1' variant='navbar bg-warning navbar-expand-lg sticky-top'>
                <Container>
                    <Navbar.Brand href="#home">Zhabr</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-3">
                        <Nav.Link className='btn btn-outline-warning' href="#home">Home</Nav.Link>      
                    </Nav>
                    <Nav className='me-auto'>
                    <PostSearch filter={filter} setFilter = {setFilter}/>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Row>
                <Row>
                    <Col xs lg="10" id='sidebar-wrapper'>
                        <Navbar className="col-md-12 d-none d-md-block bg-dark text-white sidebar">
                            <Nav className="me-auto">
                                <Nav.Link className='btn btn-outline-warning text-white' href='#'>About Us</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>

                    <Col xs lg="10" id='page-content'>
                       <PostCreation create = {createPost}/>
                       <PostList posts = {searchPosts} del = {deletePost} newcom = {handleCommentSubmit} />
                    </Col>
                </Row>
            </Container>
        </div>
        );
}
root.render(<App></App>)

export default App;
