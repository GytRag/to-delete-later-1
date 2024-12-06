


const audioFiles = document.querySelector(".audioFiles") as HTMLAudioElement;
const videoFiles = document.querySelector(".videoFiles") as HTMLAudioElement;

let audioArr: string[] = ['deep-strange-whoosh-183845.mp3', 'dark-engine-logo-141942.mp3', 'short-sweep-02-brvhrtz-224547.mp3'];
let videoArr: string[] = ['855289-hd_1920_1080_25fps.mp4', '856787-hd_1920_1080_30fps.mp4'];



audioArr.map((item, index) => {
    audioFiles.innerHTML += `
        <div class="audio">
            <div>Audio ${index + 1}</div>
            
            <button>Play</button>
        </div> 
    `

})




const playButton = document.querySelectorAll(".audio button") as NodeListOf<HTMLButtonElement>;
const nowPlayingAudio = document.querySelector(".nowPlayingAudio span") as HTMLElement;

playButton.forEach((button, index) => {
    button.addEventListener("click", () => {
        nowPlayingAudio.innerHTML = `Audio ${index + 1}<audio> <source src="/audio/${audioArr[index]}"></audio>`;
        const audio = document.querySelector("audio") as HTMLAudioElement;
        audio.play()
        function audioEnd(){
            if(!audio.ended){
                setTimeout(audioEnd, 1000)
            }else {
                nowPlayingAudio.innerHTML = 'no song';
            }
        }
        audioEnd()
    })
})


videoArr.map((item,index) => {
    videoFiles.innerHTML += `
        <div class="video">
            <div>Video ${index + 1}</div>
            <button>Play</button>
        </div> 
    `
})

const playVideo = document.querySelectorAll(".video button") as NodeListOf<HTMLVideoElement>;
const nowPlayingVideo = document.querySelector('.nowPlayingVideo') as HTMLElement;

playVideo.forEach((button, index) => {
    button.addEventListener("click", () => {
        nowPlayingVideo.innerHTML = `<div class="video">
            <video> <source src="/video/${videoArr[index]}"> </video>
        </div> `;
        const video = document.querySelector("video") as HTMLVideoElement;
        video.play()
        function videoEnd(){
            if(!video.ended){
                setTimeout(videoEnd, 2000)
            }else {
                nowPlayingVideo.innerHTML = 'Video playing';
            }
        }
        videoEnd()
    })
})


