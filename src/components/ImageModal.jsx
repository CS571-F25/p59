import { useState } from 'react';
import {Button, Image, Modal} from 'react-bootstrap';
import '@/css/ImageModal.css';


function ImageModal({art, onClose}) {

    const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <Modal
        show={true}
        onHide={() => onClose()}
        dialogClassName="modal-90w"
        aria-labelledby={art.title}
      >
        <Modal.Header closeButton >
          <Button
            variant="outline-secondary"
            size="sm"
            className="me-2 info-btn"
            onClick={() => setShowInfo(true)}
          >
            ?
          </Button>
          <Modal.Title id={art.title}>
            {art.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-text">
            <Image src={art.img} alt={art.description} fluid />
        </Modal.Body>
      </Modal>

      <Modal show={showInfo} onHide={() => setShowInfo(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`Materials: ${art.materials}`}
          <br />
          {`Size: ${art.size}`}
        </Modal.Body>
      </Modal>

    </>
  );
}

export default ImageModal;