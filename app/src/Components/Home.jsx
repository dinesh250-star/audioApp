import React from "react";
import horse from "./horse.mp3";
import car from "./car.mp3";
import train from "./train.mp3";
const Home = () => {
  let audioCtx = new AudioContext();
  let audio = new Audio(horse);
  let audio2 = new Audio(car);
  let audio3 = new Audio(train);
  const source = audioCtx.createMediaElementSource(audio);
  source.connect(audioCtx.destination);

  const source2 = audioCtx.createMediaElementSource(audio2);
  source2.connect(audioCtx.destination);

  const source3 = audioCtx.createMediaElementSource(audio3);
  source3.connect(audioCtx.destination);

  const playBtn = document.querySelector(".play");
  const pauseBtn = document.querySelector(".pause");
  const stopBtn = document.querySelector(".stop");
  playBtn.addEventListener("click", () => {
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio.play();
  });
  pauseBtn.addEventListener("click", () => {
    audio.pause();
  });
  stopBtn.addEventListener("click", () => {
    console.log("note");
    audio.pause();
    audio.currentTime = 0;
  });

  const playBtn2 = document.querySelector(".play2");
  const pauseBtn2 = document.querySelector(".pause2");
  const stopBtn2 = document.querySelector(".stop2");
  playBtn2.addEventListener("click", () => {
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    audio.pause();
    audio.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio2.play();
  });
  pauseBtn2.addEventListener("click", () => {
    audio2.pause();
  });
  stopBtn2.addEventListener("click", () => {
    console.log("note");
    audio2.pause();
    audio2.currentTime = 0;
  });
  const playBtn3 = document.querySelector(".play3");
  const pauseBtn3 = document.querySelector(".pause3");
  const stopBtn3 = document.querySelector(".stop3");
  playBtn3.addEventListener("click", () => {
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    audio.pause();
    audio.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.play();
  });
  pauseBtn3.addEventListener("click", () => {
    audio3.pause();
  });
  stopBtn3.addEventListener("click", () => {
    console.log("note");
    audio3.pause();
    audio3.currentTime = 0;
  });
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default Home;
