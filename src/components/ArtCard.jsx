import React from 'react';
import { Container, Image } from 'react-bootstrap';
import '@/css/Gallery.css';

function ArtCard(props) {
  return <>
    <Container className="art-card">
      <Image src={props.img} alt={props.altText} />
      <h3>Artwork Title</h3>
    </Container>
  </>
}

export default ArtCard;