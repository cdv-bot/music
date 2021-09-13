import React, { useState } from "react";
import classNames from "classnames";
import "./header.scss";
export default function Header(props) {
  const [list, setList] = useState(1);
  const handlePick = (value) => {
    setList(value);
  };
  return (
    <header id="header">
      <ul>
        <li
          onClick={() => handlePick(1)}
          className={classNames({
            bgrColor: list === 1,
          })}
        >
          Danh sách phát
        </li>
        <li
          onClick={() => handlePick(2)}
          className={classNames({
            bgrColor: list === 2,
          })}
        >
          Karaoke
        </li>
        <li
          onClick={() => handlePick(3)}
          className={classNames({
            bgrColor: list === 3,
          })}
        >
          Lời bài hát
        </li>
      </ul>
    </header>
  );
}
