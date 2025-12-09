import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EmblaCarousel from '../Carousel/EmblaCarousel';
import '@/css/embla.css';

const OPTIONS = {}

function GalleryPage({collection}) {

  return (
    <Container fluid className="carousel-bg">
        <h1>{collection.collectionTitle}</h1>
        <div className='carousel-wrapper'>
        <EmblaCarousel slides={collection.artworks} options={OPTIONS} />
        </div>
    </Container>
  );
}

export default GalleryPage;
