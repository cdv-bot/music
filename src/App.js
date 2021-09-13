import { useEffect, useRef, useState } from "react";
import "./App.scss";
import cam_on_anh from "./assets/cam_on_anh.mp3";
import thang_dien from "./assets/thang_dien.mp3";
import tu_ngay_den from "./assets/tu_ngay_den.mp3";
import Control from "./component/control/Control";
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import NextPlay from "./component/nextPlay";

function App() {
  const [dataMusic, setDataMusic] = useState(0);
  const [turn, setTurn] = useState(false);
  const [play, setPlay] = useState({
    index: 0,
    start: false,
  });
  const dataList = [
    {
      img: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/covers/3/2/329fdc7eb248832ef6529d92db0e7eec_1497439510.jpg",
      music: tu_ngay_den,
      singer: "Da LAB",
      song: "Từ Ngày Em Đến",
    },
    {
      img: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/9/9/8/d/998dd7d002f3b4adb4cbccfcd76adffe.jpg",
      music: cam_on_anh,
      singer: "Hoàng Yến Chibi",
      song: "Cảm Ơn Anh",
    },
    {
      img: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/9/d/5/c/9d5c56a277a06a48ec7956a4fd17e4c1.jpg",
      music: thang_dien,
      singer: "JustaTee, Phương Ly",
      song: "Thằng Điên",
    },
  ];

  const audioRef = useRef(new Audio(dataList[dataMusic].music));
  const timeInterval = useRef();
  const handlePause = () => {
    audioRef.current.pause();
    setPlay({
      ...play,
      start: true,
    });
  };
  const handlePlay = () => {
    audioRef.current.play();
    setPlay({
      ...play,
      start: false,
    });
  };
  useEffect(() => {
    audioRef.current.src = dataList[dataMusic].music;
    audioRef.current.play();
  }, [dataMusic]);

  const handleNextMusic = () => {
    setDataMusic(dataMusic + 1);
  };
  const handlePrevious = () => {
    if (dataMusic <= 0) return;

    audioRef.current.play();
  };

  return (
    <div className="App">
      <Header />
      <Main
        onPause={handlePause}
        onPlay={handlePlay}
        play={play}
        setPlay={setPlay}
        dataList={dataList}
        dataMusic={dataMusic}
        setDataMusic={setDataMusic}
      />
      <Control
        audioRef={audioRef}
        timeInterval={timeInterval}
        turn={turn}
        dataMusic={dataMusic}
        setDataMusic={setDataMusic}
        dataList={dataList}
      />
      <NextPlay
        handlePlay={handlePlay}
        handlePause={handlePause}
        play={play}
        handleNextMusic={handleNextMusic}
        handlePrevious={handlePrevious}
        handleTurn={setTurn}
        turn={turn}
      />
    </div>
  );
}

export default App;
