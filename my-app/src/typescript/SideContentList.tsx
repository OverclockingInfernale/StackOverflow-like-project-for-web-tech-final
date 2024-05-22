import React, { useEffect } from 'react'
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from '../hooks/useAction';
import SideContentItem from "./SideContentItem";
import { Link } from 'react-router-dom';
import { sideContentI } from './model';
import { art1, art2, art3, art4, art5, art6 } from '../static/textBodies';
import { Container } from 'react-bootstrap';


export default function SideContentList() {
    const { sidePosts, error, page, limit } = useTypedSelector(state => state.sideContent)
    const { fetchSideContent, setContentPage } = useActions()
    const content: sideContentI[] = [
        { id: 1, title: "Software architecture: Cohesion and Coupling", body: art1 + art2 + art3 + art4 + art5 + art6 }
    ]

    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchSideContent(page, limit)
    }, [page])

    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <Container className="side-content">
                <div className="side-title">
                    <h3>Zhabr blog</h3>
                </div>
                <Link to="/Blog" className='clickable-title'>{content[0].title}</Link>
                <hr></hr>
                {sidePosts.map(sideContent =>
                    <SideContentItem id={sideContent.id} title={sideContent.title} body={sideContent.body} />
                )}
                {/* <div className='justify-content-center mx-1' style={{ display: "flex" }}>
                    {pages.map(p =>
                        <div
                            onClick={() => setContentPage(p)}
                            className={ p === page ? 'btn btn-success' : 'btn btn-outline-dark' + " m-1"}
                        >
                            {p}
                        </div>
                    )}
                </div> */}
            </Container>
        </div>);
};

