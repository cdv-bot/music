import {
  faPause,
  faPlay,
  faRandom,
  faRetweet,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./nextPlay.scss";

function NextPlay({
  handlePlay,
  handlePause,
  play,
  handleNextMusic,
  handlePrevious,
  handleTurn,
  turn,
}) {
  return (
    <div className="nextPlay">
      <FontAwesomeIcon icon={faRandom} className="icon" />
      <FontAwesomeIcon
        icon={faStepBackward}
        className="icon"
        onClick={handlePrevious}
      />
      {play.start ? (
        <span className="icon_control" onClick={handlePlay}>
          <FontAwesomeIcon icon={faPlay} className="icon_play" />
        </span>
      ) : (
        <span className="icon_control" onClick={handlePause}>
          <FontAwesomeIcon icon={faPause} className="icon icon_pause" />
        </span>
      )}
      <FontAwesomeIcon
        icon={faStepForward}
        className="icon"
        onClick={handleNextMusic}
      />
      <FontAwesomeIcon
        icon={faRetweet}
        className="icon"
        onClick={() => handleTurn(!turn)}
      />
    </div>
  );
}

export default NextPlay;
