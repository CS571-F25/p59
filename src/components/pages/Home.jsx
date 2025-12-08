import React from 'react';
import ArtCard from '../ArtCard';
import GalleryPage from './GalleryPage';
import { Container } from 'react-bootstrap';
//top navigation.. in home screen or on seperate component? see past project
export default function Home (props) {
    //top router
    return <div>
            <h1>Welcome to Alana's art library</h1>
            <h2>I enjoy working with a variety of mediums, both traditional and digital. See above for different collections.</h2>
            <br/>
            <h2>Featured artwork</h2>
            <ArtCard img="/p59/images/red-dress.jpg"/>
    </div>
}

//at least 3 pages, 5 components