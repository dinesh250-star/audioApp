import React, { useState } from "react";
import horse from "./horse.mp3";
import car from "./car.mp3";
import train from "./train.mp3";
import rain from "./rain.mp3";
import lion from "./lion.mp3";
import { useRef } from "react";
const Home = () => {
  const [audioData, setAudioData] = useState([horse, car, train, rain, lion]);

  const recent = useRef(null);
  let count = -1;

  let audioCtx = new AudioContext();

  const playHandler = (e) => {
    if (recent.current != null) {
      recent.current.pause();
      recent.current.currentTime = 0;
    }
    const selectedAudio = e.target.value;

    let audio = new Audio(audioData[selectedAudio]);
    const source = audioCtx.createMediaElementSource(audio);
    source.connect(audioCtx.destination);
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    audio.play();
    recent.current = audio;
  };

  return (
    <div>
      {audioData.map((i) => {
        count = count + 1;

        return (
          <div key={count}>
            <button className="play" value={count} onClick={playHandler}>
              Play
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
