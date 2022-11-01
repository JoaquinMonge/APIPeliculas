import React, { useEffect, useState } from "react";
import { Prueba } from "./Prueba";

export const Movies = ({ movies }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg`;

  return (
    <>
      <div className="container-movie">
        {movies.map((item) => (
          <div key={item.id} className="col">
            <Prueba
              title={item.title}
              adult={item.adult}
              language={item.original_language}
              overview={item.overview}
              vote={item.vote_average}
              img={item.poster_path}
              genre={item.genre_ids}
            />
            <div className="movies-wrapper">
              {/* <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt=""
                style={{ width: "15rem", height: "19rem" }}
              /> */}
              {/* <h5 className="titulo-img">{item.title}</h5> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
