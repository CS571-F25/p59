import {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EmblaCarousel from '../Carousel/EmblaCarousel';
import '@/css/embla.css';
import Spinner from 'react-bootstrap/Spinner';

const OPTIONS = {}

function GalleryPage({collection}) {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  let loadedCount = 0;

  collection.artworks.forEach(art => {
    const img = new Image();
    img.src = art.img;
    img.onload = handleLoad;
    img.onerror = handleLoad;
  });

  //I will only show the carousel once all the images are finished loading
  function handleLoad() {
    loadedCount++;
    if (loadedCount === collection.artworks.length) {
      setLoading(false);
    }
  }
}, [collection.artworks]);


  return (
  <Container fluid className="carousel-bg">
    <h1>{collection.collectionTitle}</h1>

    {loading ? (
        <Spinner animation="border" />
    ) : (
      <div className="carousel-wrapper">
        <EmblaCarousel slides={collection.artworks} options={OPTIONS} />
      </div>
    )}
  </Container>
);

}

export default GalleryPage;
