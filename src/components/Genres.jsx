import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MovieGenre } from "./MovieGenre";
// import { Routes, Route, Link } from "react-router-dom";

export const Genres = () => {
  const [genero, setGenero] = useState([]);
  const [valor, setValor] = useState();
  // console.log(valor);
  const url =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=ae717de32df09def4a9f2799b09a9896&language=en-US";
  useEffect(() => {
    async function fetchApi() {
      await fetch(url)
        .then((response) => response.json())
        .then((genre) => {
          setGenero(genre.genres);
          // console.log(genero);
        });
    }
    fetchApi();
  }, []);

  const buscar = (e) => {
    genero.map((gen) => {
      if (e.target.value === Object.values(gen)[1]) {
        setValor(Object.values(gen)[0]);
        // console.log(Object.values(gen)[0]);
        // console.log(
        //   `https://api.themoviedb.org/3/discover/movie?api_key=ae717de32df09def4a9f2799b09a9896&with_genres=${
        //     Object.values(gen)[0]
        //   }`
        // );
      }
    });
  };

  return (
    <>
      <div>
        <select className="generos" onChange={buscar}>
          <option>Generos</option>
          {genero.map((gen) => (
            <option key={gen.name} id={Object.values(gen)[0]}>
              {Object.values(gen)[1]}
            </option>
          ))}
        </select>
      </div>
      {/* <MovieGenre gen={valor} /> */}
    </>
  );
};
