import { useState } from 'react';
import {Button, Image, Modal} from 'react-bootstrap';
import '@/css/ImageModal.css';


function ImageModal({art, onClose}) {

  return (
    <>
      <Modal
        show={true}
        onHide={() => onClose()}
        dialogClassName="modal-90w"
        aria-labelledby={art.title}
      >
        <Modal.Header closeButton>
          <Modal.Title id={art.title}>
            {art.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-text">
            <Image src={art.img} alt={art.description} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImageModal;