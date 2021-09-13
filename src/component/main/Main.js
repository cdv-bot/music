import { faBroadcastTower, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import playLoading from "../../assets/icon-playing.gif";
import PlayControl from "../play";
import "./main.scss";

export default function Main({
  onPause,
  onPlay,
  play,
  setPlay,
  dataList,
  setDataMusic,
}) {
  const refScroll = useRef();
  const [interWidth, setInterWidth] = useState(window.innerWidth);
  const [scroll, setScroll] = useState(2);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInterWidth(window.innerWidth);
    });
  }, []);

  useLayoutEffect(() => {
    if (refScroll.current) {
      const itemWidth = refScroll.current.offsetWidth;
      const scrollWidth =
        interWidth / 2 - refScroll.current.offsetLeft - itemWidth / 2;
      setScroll(scrollWidth);
    }
  }, [play, interWidth]);

  const handlePause = (value) => {
    onPause();
    if (value === play.index) {
      setPlay({
        ...play,
        start: true,
      });
    }
  };

  const handleStart = (value) => {
    onPlay();
    if (value === play.index) {
      setPlay({
        ...play,
        start: false,
      });
    } else {
      setPlay({
        index: value,
        start: false,
      });
      setDataMusic(value);
    }
  };

  return (
    <main id="main">
      <ul
        style={{ transform: `translateX(${scroll}px)`, transition: "all 1s" }}
      >
        {dataList.map((item, index) => {
          return (
            <li ref={play.index === index ? refScroll : null} key={index}>
              <div className="item_list">
                <img
                  src={item.img}
                  alt="Ad"
                  className={classNames({ pickPlay: play.index === index })}
                />
                <div className="icon_play ">
                  <div className="tooltip">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="action_icon icon"
                    />
                    <span className="tooltiptext">Thêm vào thư viện</span>
                  </div>

                  <PlayControl
                    play={play}
                    index={index}
                    handleStart={handleStart}
                    handlePause={handlePause}
                  />
                  <div className="tooltip">
                    <FontAwesomeIcon
                      icon={faBroadcastTower}
                      className="action_icon icon"
                    />
                    <span className="tooltiptext">Phát Radio bài hát</span>
                  </div>
                </div>
                {play.index === index && !play.start && (
                  <img src={playLoading} alt="gif" className="gif_play_chart" />
                )}
              </div>
              {
                <div
                  className="name"
                  style={
                    play.index === index ? { visibility: "inherit" } : null
                  }
                >
                  <p>{item.song}</p>
                  <p>{item.singer}</p>
                </div>
              }
            </li>
          );
        })}
      </ul>
    </main>
  );
}
