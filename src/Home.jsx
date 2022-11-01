import React, { useEffect, useState } from "react";
import { ContinueWatching } from "./components/ContinueWatching";
import { Genres } from "./components/Genres";

import { MovieGenre } from "./components/MovieGenre";
import { Movies } from "./components/Movies";
import { Navbar } from "./components/Navbar";
import { Pagination } from "./components/Pagination";
// import { Slider } from "./components/Slider";
// import { Prueba } from "./components/Prueba";
import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";

export const Home = () => {
  const [movie, setMovie] = useState([]);

  const url = ` https://api.themoviedb.org/3/discover/movie?api_key=ae717de32df09def4a9f2799b09a9896&page=2`;

  useEffect(() => {
    async function fetchApi() {
      await fetch(url)
        .then((response) => response.json())
        .then((peliculas) => {
          setMovie(peliculas.results);
          console.log(peliculas.results);
        });
    }
    fetchApi();
  }, []);

  return (
    <>
      {/* <Routes> */}
      <Navbar />
      {/* <Prueba movies={movie} /> */}
      {/* <Slider /> */}
      <ContinueWatching movies={movie} />
      {/* <MostPopular /> */}
      <Movies movies={movie} />
      {/* <Route path="/" element={<Movies movies={movie} />} /> */}

      <Pagination />
      <MovieGenre />
      {/* </Routes> */}
    </>
  );
};
