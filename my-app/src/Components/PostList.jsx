import { Container } from 'react-bootstrap';
import React from 'react';
import PostItem from './PostItem';
import CommentList from './CommentList';

const PostList = ({posts, del, newcom}) => {
    return(
        <div>
        {posts.map((post) => 
            <div>
            <PostItem del = {del} post = {post} key = {post.id}/>
            </div>
            )
        }
        </div>
        )
}

export default PostList;