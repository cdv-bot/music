import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PlayControl({ play, index, handleStart, handlePause }) {
  return (
    <>
      {(play.index !== index || play.start) && (
        <div className="bd_icon_play" onClick={() => handleStart(index)}>
          <FontAwesomeIcon icon={faPlay} className="play_icon" />
        </div>
      )}
      {play.index === index && !play.start && (
        <div className="bd_icon_play" onClick={() => handlePause(index)}>
          <FontAwesomeIcon icon={faPause} className="play_icon " />
        </div>
      )}
    </>
  );
}

export default PlayControl;
