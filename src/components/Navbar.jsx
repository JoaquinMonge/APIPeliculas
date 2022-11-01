import {
  AccountCircle,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import React from "react";
import { Genres } from "./Genres";
import { useEffect, useState } from "react";
import { MovieGenre } from "./MovieGenre";

export const Navbar = () => {
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
      <div className="Navbar-container">
        <div className="left">
          <h1>NETFLIX</h1>
          <h3>Inicio</h3>
          <h3>Series</h3>
          <h3>Peliculas</h3>
          <h3>Mi Lista</h3>
          <h3>
            {/* <Genres /> */}

            <div>
              <select className="generos" onChange={buscar}>
                <option>Generos</option>
                {genero.map((gen) => (
                  <option key={gen.name}>{Object.values(gen)[1]}</option>
                ))}
              </select>
            </div>
          </h3>
        </div>
        <div className="center"></div>
        <div className="right">
          <h3>
            <Search />
          </h3>
          <h3>
            <NotificationsOutlined />
          </h3>
          <h3>
            <AccountCircle />
          </h3>
        </div>
      </div>
      <MovieGenre gen={valor} />
    </>
  );
};
