import { Button, Card, Modal, Form } from 'react-bootstrap';
import React, { useState } from 'react';

const PostSearch = ({filter, setFilter}) => {
    return (
        <div>
            <Form.Control className='mt-3' value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder='Search...'
            />
        </div>
    );
};

export default PostSearch;