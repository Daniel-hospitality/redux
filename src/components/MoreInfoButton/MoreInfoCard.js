import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import LineIcon from "react-lineicons";
import screenfull from "screenfull";
import "./MoreInfoCard.css";
import "../../Player.css";

function MoreInfoCard(props) {
  const playerWrapper = useRef(null);

  const [genres, setGenres] = useState(null);
  const [play, setPlay] = useState(true);
  const [muted, setMuted] = useState(true);
  const [hidden, setHidden] = useState(true);
  const [hideBorder, setHideBorder] = useState(true);

  const returnGenres = () => {
    let values = [];
    for (let i = 0; i < props.movie?.genres.length; i++) {
      values.push(props.movie?.genres[i].name);
    }
    return values.join(", ");
  };

  useEffect(() => {
    setGenres(returnGenres());
  }, []);

  const handlePause = () => {
    play ? setPlay(false) : setPlay(true);
  };

  const handleToggleMuted = () => {
    muted ? setMuted(false) : setMuted(true);
  };
  const handleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.request(playerWrapper.current);
      screenfull.on("change", () => {
        screenfull.isFullscreen ? setMuted(false) : setMuted(true);
        screenfull.isFullscreen ? setHidden(false) : setHidden(true);
        screenfull.isFullscreen ? setHideBorder(false) : setHideBorder(true);
      });
    }
  };

  function handleExit() {
    screenfull.exit();
  }

  function toggleShow() {
    setHidden(false);
    setTimeout(function () {
      setHidden(true);
    }, 5000);
  }

  return (
    <div>
      <div
        onClick={props.timedLightMode}
        className={"blurMoreDetailsCard"}
      ></div>
      <div className="centerMoreInfo">
        <div className={"moreInfo"}>
          <div className="showMovie">
            <div className={"show-border"} id="top-frameborder"></div>
            <div className={"show-border"} id="bottom-frameborder"></div>
            <div className="closeMovie" onClick={props.timedLightMode}>
              <LineIcon name="close" />
            </div>
            <div className="mute-button" onClick={handleToggleMuted}>
              <i
                className={muted ? "fas fa-volume-mute" : "fas fa-volume-up"}
                id="mute"
              />
            </div>
            <div
              className="playerWrapper"
              ref={playerWrapper}
              onPointerMove={toggleShow}
            >
              <ReactPlayer
                url={`https://youtu.be/${props.movie?.youtubeKey}`}
                playing={play}
                muted={muted}
                controls={false}
                loop={true}
                width="100%"
                height="100%"
              />
              <div
                className={hideBorder ? "hide-border" : "show-border"}
                id="top-frameborder"
              ></div>
              <div
                className={hideBorder ? "hide-border" : "show-border"}
                id="bottom-frameborder"
              ></div>
              <button
                className={hidden ? "hidden" : "show"}
                id="player-fs-exit-btn"
                onClick={handleExit}
              >
                <LineIcon name="close" />
              </button>

              <button
                className={hidden ? "hidden" : "show"}
                id="player-fs-mute-btn"
                onClick={handleToggleMuted}
              >
                <LineIcon name={muted ? "volume-mute" : "volume"} />
              </button>

              <button
                className={hidden ? "hidden" : "show"}
                id="player-fs-play-btn"
                onClick={handlePause}
              >
                <LineIcon name={play ? "play" : "pause"} />
              </button>
            </div>
            <div className="logo-container">
              <img
                className="more-info-logo"
                src={props.movie?.logoUrl}
                alt={props.movie?.title + "logo"}
              />
            </div>
            <div className="icons-container">
              <button
                className="playButtonDetailCard"
                onClick={handleFullscreen}
              >
                <i className="fas fa-caret-right" /> &nbsp; Play
              </button>
              <div className="icon-btn" id="icon-plus">
                <i className="lni lni-plus"></i>
              </div>
              <div className="icon-btn">
                <i className="lni lni-thumbs-up"></i>
              </div>
              <div className="icon-btn">
                <i className="lni lni-thumbs-down"></i>
              </div>
            </div>
          </div>
          <div className="container_movie_info">
            <div className="runTime_overview">
              <div className="jarBox">
                <div className="movieJarFile">
                  <div className="genresMovies">
                    Genres: &nbsp; <h5>{genres}</h5>
                  </div>
                  <div className="movieDirector">
                    <>
                      Director:&nbsp; <h5>{props.movie?.director}</h5>
                    </>
                  </div>
                  <div className="playTime">
                    <>
                      Runtime: &nbsp; <h5>{props.movie?.runtime} Min</h5>{" "}
                    </>{" "}
                  </div>
                </div>
              </div>
              <div className="movieOverview">
                <p>{props.movie?.overview}</p>
              </div>
            </div>
            {/* <div className="director_genre"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MoreInfoCard;
