import React from 'react';
import { getPagesArray } from '../utils/pages';
import { Button } from 'react-bootstrap';

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <Button
                    variant={page === p ? 'primary' : 'outline-primary'}
                    onClick={() => changePage(p)}
                    key={p}
                    className='page mx-1'>
                    {p}
                    
                </Button>
            )}
        </div>
    );
};

export default Pagination;