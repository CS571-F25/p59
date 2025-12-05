/**
 * Show image, title in thumnail format
 * raised border, hover mechanic.
 */
import '@/css/Gallery.css';

function ArtCard(props) {
  return <>
    <div className="art-card">
      <img src={props.img} alt={props.altText} />
      <h3>Artwork Title</h3>
    </div>
  </>
}

export default ArtCard;