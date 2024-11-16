d = document;
// navbar

const menu = d.querySelector(".menu");
const navbar = d.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});

// Cierre navbar

// Video
const video = d.querySelector(".video");
const btn = d.querySelector(".buttons button i");
const bar = d.querySelector(".video-bar");

const playPause = () => {
  if (video.paused) {
    video.play();
    btn.className = "far fa-pause-circle"
    video.style.opacity = "0.7";
  } else {
    video.pause();
    btn.className = "far fa-play-circle";
    video.style.opacity = "0.3";
  }
}

btn.addEventListener("click", () => {
  playPause();
})

// barra de progreso
video.addEventListener("timeupdate", () => {
  // console.log(video.currentTime, video.duration);

  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%`;

  if (video.ended) {
    btn.className = "far fa-play-circle";
    video.style.opacity = "0.3";
  }
})

// Cierre video