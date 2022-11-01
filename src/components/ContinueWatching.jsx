import { useState } from "react";
import { Prueba } from "./Prueba";

export const ContinueWatching = ({ movies }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  return (
    <>
      <h4 className="watch">Continue Watching</h4>
      <div className="roww">
        {movies.slice(10, 17).map((item) => (
          <div key={item.id} className=" ">
            <Prueba
              title={item.title}
              adult={item.adult}
              language={item.original_language}
              overview={item.overview}
              vote={item.vote_average}
              img={item.poster_path}
              genre={item.genre_ids}
            />
            ;{/* <h5 className="titulo-img">{item.title}</h5> */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
