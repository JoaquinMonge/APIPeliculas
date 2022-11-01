import { Modal, Button, Navbar } from "react-bootstrap";
import React, { useEffect, useState } from "react";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

export const Prueba = ({ title, genre, language, overview, vote, img }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <img
        onClick={handleShow}
        src={`https://image.tmdb.org/t/p/w500${img}`}
        alt=""
        style={{ width: "15rem", height: "19rem" }}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{title}</h3>

          <h6>
            <b>Descripcion: </b>
            {overview}
          </h6>

          <h6></h6>
          <h6>
            <b>Language:</b> {language.toUpperCase()}
          </h6>
          <h6>
            <b>Rating: </b>
            {vote}
          </h6>

          {/* <h6> Genre: {genre[0]}</h6> */}
        </Modal.Body>
        <Modal.Footer>
          <Button>Agregar a mi lista</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
