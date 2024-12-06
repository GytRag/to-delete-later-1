"use strict";
const audioFiles = document.querySelector(".audioFiles");
const videoFiles = document.querySelector(".videoFiles");
let audioArr = ['deep-strange-whoosh-183845.mp3', 'dark-engine-logo-141942.mp3', 'short-sweep-02-brvhrtz-224547.mp3'];
let videoArr = ['855289-hd_1920_1080_25fps.mp4', '856787-hd_1920_1080_30fps.mp4'];
audioArr.map((item, index) => {
    audioFiles.innerHTML += `
        <div class="audio">
            <div>Audio ${index + 1}</div>
            
            <button>Play</button>
        </div> 
    `;
});
const playButton = document.querySelectorAll(".audio button");
const nowPlayingAudio = document.querySelector(".nowPlayingAudio span");
playButton.forEach((button, index) => {
    button.addEventListener("click", () => {
        nowPlayingAudio.innerHTML = `Audio ${index + 1}<audio> <source src="/audio/${audioArr[index]}"></audio>`;
        const audio = document.querySelector("audio");
        audio.play();
        console.log(`Audio ${index + 1}`);
    });
});
videoArr.map((item, index) => {
    videoFiles.innerHTML += `
        <div class="video">
            <div>Video ${index + 1}</div>
            <button>Play</button>
        </div> 
    `;
});
const playVideo = document.querySelectorAll(".video button");
const nowPlayingVideo = document.querySelector('.nowPlayingVideo');
playVideo.forEach((button, index) => {
    button.addEventListener("click", () => {
        nowPlayingVideo.innerHTML = `<div class="video">
            <video> <source src="/video/${videoArr[index]}"> </video>
        </div> `;
        const video = document.querySelector("video");
        video.play();
    });
});