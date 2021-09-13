import React, { useEffect, useRef, useState } from "react";

import "./control.scss";

export default function Control({
  audioRef,
  timeInterval,
  turn,
  setDataMusic,
  dataMusic,
  dataList,
}) {
  const [trackProgress, setTrackProgress] = useState(0);

  const { duration } = audioRef.current;

  useEffect(() => {
    timeInterval.current = setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
    }, 1000);
  }, []);
  useEffect(() => {
    if (turn && dataList.length === dataMusic) {
      setDataMusic(0);
    }
  }, [trackProgress]);
  const onScrub = (value) => {
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };
  const timeLive = (data) => {
    if (!data) return "00:00";
    let curmins = Math.floor(data / 60);
    let cursecs = Math.floor(data - curmins * 60);
    let durmins = Math.floor(data / 60);
    let dursecs = Math.floor(data - durmins * 60);
    if (cursecs < 10) {
      cursecs = "0" + cursecs;
    }
    if (dursecs < 10) {
      dursecs = "0" + dursecs;
    }

    if (cursecs < 10) {
      curmins = "0" + curmins;
    }
    if (durmins < 10) {
      durmins = "0" + durmins;
    }

    return `${curmins}:${cursecs}`;
  };

  return (
    <footer id="footer">
      <div className="time_live">
        <span className="time1">{timeLive(trackProgress)}</span>
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          onChange={(e) => onScrub(e.target.value)}
          id="myRange"
        />
        <span className="time2">{timeLive(duration)}</span>
      </div>
    </footer>
  );
}
