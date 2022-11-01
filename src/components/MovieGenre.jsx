import React, { useEffect } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Prueba } from "./Prueba";

export const MovieGenre = ({ gen }) => {
  const moviesUrl = ` https://api.themoviedb.org/3/discover/movie?api_key=ae717de32df09def4a9f2799b09a9896&with_genres=${gen}`;
  const [buscaGenero, setBuscaGenero] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // console.log(buscaGenero);
  useEffect(() => {
    async function fetchApi() {
      await fetch(moviesUrl)
        .then((response) => response.json())
        .then((movies) => {
          setBuscaGenero(movies.results);
        });
    }
    fetchApi();
  }, [moviesUrl]);

  return (
    <div className="genero">
      {buscaGenero.map((gen) => (
        <div key={gen.id}>
          <Prueba
            img={gen.poster_path}
            title={gen.title}
            overview={gen.overview}
            language={gen.original_language}
            vote={gen.vote_average}
          />
          {/* <img
            src={`https://image.tmdb.org/t/p/w500${gen.poster_path}`}
            alt=""
            style={{ width: "15rem", height: "19rem" }}
          /> */}
        </div>
      ))}
      {/* <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt=""
        style={{ width: "15rem", height: "19rem" }}
      />
      <h5 className="titulo-img">{item.title}</h5> */}
    </div>
  );
};
