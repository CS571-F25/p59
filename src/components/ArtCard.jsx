/**
 * Show image, title in thumnail format
 * raised border, hover mechanic.
 */
import '/src/Gallery.css';

function ArtCard() {
  return <>
    <div className="art-card">
      <img src="public//images/Stairway-Charcoal.jpg" alt="Art Placeholder" />
      <h3>Artwork Title</h3>
    </div>
  </>
}

export default ArtCard;