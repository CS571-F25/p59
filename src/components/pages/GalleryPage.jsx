import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EmblaCarousel from '../Carousel/EmblaCarousel';
import '@/css/embla.css';

const OPTIONS = {}
const SLIDE_COUNT = 1
const SLIDES = [
  "/p59/images/Rooster.jpg", "/p59/images/Aaron-portrait.jpg", "/p59/images/art-room.jpg", "/p59/images/Stairway-Charcoal.jpg"
]
//Array.from(Array(SLIDE_COUNT).keys())

function GalleryPage({collection}) {

  return (
    <Container>
        <h1>{collection.collectionTitle}</h1>
        {console.log(collection)}
        <div className='carousel-wrapper'>
        <EmblaCarousel slides={collection.artworks} options={OPTIONS} />
        </div>
    </Container>
  );
}

export default GalleryPage;
