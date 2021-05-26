import React, { useState, useEffect } from "react";
import Backend from "../Backend";
import "./MovieLane.css";
import MovieLaneItem from "./MovieLaneItem";
// import Player from "../components/Player";

const base_url = "https://image.tmdb.org/t/p/original/";

function MovieLane({ title, genre, isLargeRow }) {
  const [movies, setMovies] = useState(null);
  const [render, setRender] = useState(false);
  const [id, setId] = useState(null);
  const [movie, setMovie] = useState(null);
  const [posTop, setPosTop] = useState(null);
  const [posLeft, setPosLeft] = useState(null);

    useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchGenres(genre);
      setMovies(response.data);
    }
    fetchData();
  }, [genre]);

  

  // const opts = {
  //   height: "600",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 0,
  //   },
  // };

  const setPositionXY = (top, left) => {
    setPosTop(`${top - 100}px`);
    setPosLeft(`${left}px`);
  };

  const setLaneItemIndex = (index) => {
    setId(index);
    setMovie(movies[id]);
  };

  // const onMouseEnter = (e) => {
  //   let offsetTop = e.target.offsetTop;
  //   let offsetLeft = e.target.offsetLeft;

  //   setLaneItemIndex(e.target.id)
  //   setPositionXY(offsetTop, offsetLeft);
  //   setRender(true);
  //   e.target.style.setProperty("width", "500px");
  // };

  const onMouseOver = (e) => {
    let offsetTop = e.target.offsetTop;
    let offsetLeft = e.target.offsetLeft;

    setLaneItemIndex(e.target.id);
    setPositionXY(offsetTop, offsetLeft);
    setRender(true);
  };

  const onMouseLeave = () => {
    setMovie(null);
    setRender(false);
  };

  return (
    <div className="movies_lane">
      <h2>{title}</h2>
      <div className="movies_posters">
        {movies?.map((movie, index) => {
          return (
            <img
              id={index}
              key={movie.id}
              className={`movies_poster ${isLargeRow && "movies_posterLarge"}`}
              src={
                isLargeRow
                  ? `${base_url}${movie.posterPath}`
                  : movie.movieThumbUrl
              }
              alt={movie.title}
              // onMouseEnter={onMouseEnter}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            />
          );
        })}
      </div>
      {render ? (
        <MovieLaneItem
          onMouseOver={onMouseOver}
          movie={movie}
          posLeft={posLeft}
          posTop={posTop}
        />
      ) : (
        ""
      )}
      {/* {render ? <MovieLaneItem onMouseEnter={onMouseEnter} movie={movie} posLeft={posLeft} posTop={posTop}/>: ""} */}
    </div>
  );
}

export default MovieLane;
