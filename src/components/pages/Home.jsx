import React from 'react';
import ArtCard from '../ArtCard';
import GalleryPage from './GalleryPage';
//top navigation.. in home screen or on seperate component? see past project
export default function Home (props) {
    //top router
    return <div>
        <h1>Home!</h1>
        <GalleryPage />
    </div>
}

//at least 3 pages, 5 components