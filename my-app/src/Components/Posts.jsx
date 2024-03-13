import React, { useEffect, useMemo, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import PostCreation from './PostCreation';
import PostList from './PostList';
import PostSearch from './PostSearch';
import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../UI/MySelect';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from '../Pagination/Pagination';
import index from '../CSS styles/App.css';



const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef()

    const [filter, setFilter] = useState({ query: '' })

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (page, limit) => {
        const response = await PostService.getAll(page, limit);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    const searchPosts = useMemo(
        () => {
            return posts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
        }, [filter.query, posts]
    )




    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const deletePost = (post) => {
        console.log(posts.comments);
        setPosts(posts.filter(p => p.id !== post.id));
    }

    useEffect(() => {
        fetchPosts(page, limit)
    }, [])

    const changePage = (page) => {
        setPage(page)
        fetchPosts(page, limit)
    }

    return (
        <div>
            <PostSearch filter={filter} setFilter={setFilter} />
            <PostCreation create={createPost} />
            <PostList posts={searchPosts} del={deletePost} />
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />

        </div>
    )
}

export default Posts;