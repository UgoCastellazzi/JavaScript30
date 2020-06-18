const media = document.querySelector('video');
const play = document.querySelector(".player__button.toggle");
const progress = document.querySelector(".progress__filled");
const volume = document.getElementsByName("volume")[0];
const playbackRate = document.getElementsByName("playbackRate")[0];
const rwd = document.querySelectorAll('.player__button')[1];
const fwd = document.querySelectorAll('.player__button')[2];

play.addEventListener('click', playPauseMedia);
media.addEventListener('click', playPauseMedia);
rwd.addEventListener('click', setTime);
fwd.addEventListener('click', setTime);
volume.addEventListener("input", setVolume);
playbackRate.addEventListener("input", setSpeed);


function setTime() {
  media.currentTime += Math.trunc(this.dataset.skip);
}

function setVolume() {
  media.volume = volume.value;
}

function setSpeed() {
  media.playbackRate = playbackRate.value;
}

function playPauseMedia() {
  if(media.paused) {
    play.innerHTML = "►";
    media.play();
  } else {
    play.innerHTML = "⏸️";
    media.pause();
  }
}

function setProgress() {
  const timePercent = media.currentTime / media.duration * 100;
  progress.style.width = `${timePercent}%`
}

setInterval(setProgress, 1000);