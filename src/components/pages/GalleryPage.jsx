import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EmblaCarousel from '../Carousel/EmblaCarousel';
import '@/css/embla.css';

const OPTIONS = {}
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Gallery({ images }) {
  return (
    <Container>
        <h1>This will show artworks of a certain collection</h1>

        <div className='carousel-wrapper'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    </Container>
  );
}

export default Gallery;
