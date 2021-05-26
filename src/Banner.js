import React, { useState, useEffect, useRef } from "react";
import "./Banner.css";
import Backend from "./Backend";
import Player from "./Player";
import LineIcon from "react-lineicons";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import MoreInfoCard from "./components/MoreInfoButton/MoreInfoCard";
// import MoreInfoCard2 from "./components/MoreInfoButton/MoreInfoCard2";

function Banner({ genre }) {
  const [movie, SetMovie] = useState([]);
  const player = useRef(null);
  const bannerRef = useRef(null);

  const [muted, setMuted] = useState(true);
  const [render, setRender] = useState(false);
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchGenres(genre);
      SetMovie(
        response.data[Math.floor(Math.random() * response.data.length - 1)]
      );
      return response;
    }

    fetchData();
  }, [genre]);

  const handleClickFullscreen = () => {
    player.current.enableFullscreen();
    player.current.enablePlayer();
    player.current.toggleMute();
  };

  const handleClickMute = () => {
    player.current.toggleMute();
    muted ? setMuted(false) : setMuted(true);
  };

  const handleBodyScroll = () => {
    render
      ? console.log("BodyScroll: locked")
      : console.log("BodyScroll: unlocked");
    render
      ? enableBodyScroll(bannerRef.current)
      : disableBodyScroll(bannerRef.current);
  };

  const handleRender = () => {
    setRender(!render);
    handleBodyScroll();
    player.current.toggleLight();
    setGenres(returnGenres);
  };

  const timedLightMode = () => {
    setRender(!render);
    handleBodyScroll();
    player.current.timedToggleLight();
  };

  const returnGenres = () => {
    let values = [];
    for (let i = 0; i < movie.genres?.length; i++) {
      values.push(movie.genres[i]?.name);
    }
    return values.join(", ");
  };

  function truncate(string, n) {
    //... na 200 karakters in description//
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      ref={bannerRef}
      // style={{
      //   backgroundSize: "cover",
      //   backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdropPath}")`,
      //   backgroundPosition: "center center",
      // }}
    >
      <div className="player-wrapper">
        <Player ref={player} movie={movie} />
      </div>
      <div className="banner_contents">
        <img
          className="banner_movielogo"
          src={movie?.logoUrl}
          alt={movie?.title + "logo"}
        />
        {/* <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1> */}
        <p className="banner_description">{truncate(movie?.overview, 200)}</p>
        {/* <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1> */}
        <div className="banner_buttons">
          <button className="banner_button" onClick={handleClickFullscreen}>
            <i className="fas fa-caret-right" />
            &nbsp;&nbsp; Play
          </button>
          <button className="banner_button" onClick={handleRender}>
            <i className="fas fa-info-circle"></i> &nbsp;&nbsp; Meer informatie
          </button>
          {render ? (
            <MoreInfoCard
              movie={movie}
              timedLightMode={timedLightMode}
              genres={genres}
            />
          ) : (
            ""
          )}

          {/* <button className="banner_button" onClick={handleRender}>
            <i className="fas fa-info-circle"></i> &nbsp;&nbsp; Meer informatie 2
          </button>
          {render ? (
            
            <MoreInfoCard2
              movie={movie}
              timedLightMode={timedLightMode}
              genres={genres}
            />
          ) : (
            ""
          )} */}

          <button className="banner_button_mute" onClick={handleClickMute}>
            <LineIcon name={muted ? "volume-mute" : "volume"} />
          </button>
        </div>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
