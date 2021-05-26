import React, { useState } from "react";
import "./MovieLaneItem.css";
import ReactPlayer from "react-player/youtube";
import LineIcon from "react-lineicons";

function MovieLaneItem(props) {
  const [hidden, setHidden] = useState(true);
  const [muted, setMuted] = useState(true);

  const mystyle = {
    position: "absolute",
    left: props.posLeft,
    top: props.posTop,
  };

  const handleToggleMuted = () => {
    muted ? setMuted(false) : setMuted(true);
  };

  return (
    <div className="movie_lane_item" style={mystyle}>
      <div className="movie-lane-player-wrapper">
        <ReactPlayer
          url={`https://youtu.be/${props.movie?.youtubeKey}`}
          playing={true}
          muted={true}
          controls={false}
          loop={true}
          width="100%"
          height="100%"
        />
        <div className="mute-button" onClick={handleToggleMuted}>
          <i
            className={muted ? "fas fa-volume-mute" : "fas fa-volume-up"}
            id="mute"
          />
        </div>
      </div>
      <div className="movie_lane_item_btn-container">
        <button className="movie_lane_item_button">
          <i className="fas fa-caret-right" />
        </button>
        <button className="movie_lane_item_button">
          <i className="lni lni-plus"></i>
        </button>
        <button className="movie_lane_item_button">
          <i className="lni lni-thumbs-up"></i>
        </button>
        <button className="movie_lane_item_button">
          <i className="lni lni-thumbs-down"></i>
        </button>

        <button className="movie_lane_item_button">
          <i className="fas fa-caret-down"></i>
        </button>
      </div>
      {/* <div className="movie_lane_genres">
        <p>Genres: &nbsp;</p>
        {props.movie?.genres.map((id) => (
          <li>
            <h5>{id.name},&nbsp;</h5>
          </li>
        ))}
      </div> */}
    </div>
  );
}

export default MovieLaneItem;
