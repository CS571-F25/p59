import React from 'react';
import ArtCard from '../ArtCard';
import GalleryPage from './GalleryPage';
import { Container } from 'react-bootstrap';
//top navigation.. in home screen or on seperate component? see past project
export default function Home (props) {
    //top router
    return <div>
        <Container display="flex">
            <h1>Home!</h1>
            <h2>This is the home page. Add an interesting background</h2>
        </Container>
    </div>
}

//at least 3 pages, 5 components