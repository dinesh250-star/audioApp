import React, { useState } from "react";
import horse from "./horse.mp3";
import car from "./car.mp3";
import train from "./train.mp3";
import rain from "./rain.mp3";
import lion from "./lion.mp3";
import { useRef } from "react";
import carImg from "./car.jpeg";
import horseImg from "./horse.jpeg";
import lionImg from "./lion.jpeg";
import rainImg from "./rain.jpeg";
import trainImg from "./train.jpeg";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  const [audioData, setAudioData] = useState([
    { inp: horse, img: horseImg },
    { inp: car, img: carImg },
    { inp: train, img: trainImg },
    { inp: rain, img: rainImg },
    { inp: lion, img: lionImg },
  ]);

  const recent = useRef(null);
  let count = -1;

  let audioCtx = new AudioContext();

  const playHandler = (e) => {
    if (recent.current != null) {
      recent.current.pause();
      recent.current.currentTime = 0;
    }
    const selectedAudio = e.target.value;

    let audio = new Audio(audioData[selectedAudio].inp);
    const source = audioCtx.createMediaElementSource(audio);
    source.connect(audioCtx.destination);
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    audio.play();
    recent.current = audio;
  };

  return (
    <div className="container">
      {audioData.map((i) => {
        count = count + 1;

        return (
          <div
            key={count}
            className="card text-white bg-dark"
            style={{
              display: "block",
              marginLeft: "9rem",
              marginBottom: "9rem",
              padding: "4rem",
              marginTop: "5rem",
            }}
          >
            <img
              className="card-img ml-5"
              src={i.img}
              alt=""
              style={{
                display: "inline-block",
                maxWidth: "200px",
                maxHeight: "100px",
              }}
            />
            <div
              style={{
                display: "inline-block",
              }}
            >
              <button
                className="btn btn-outline-primary mx-5"
                value={count}
                onClick={playHandler}
              >
                Play
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
