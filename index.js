const video = document.getElementById('video');

video.addEventListener('click', toggleVideo);

function toggleVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}


