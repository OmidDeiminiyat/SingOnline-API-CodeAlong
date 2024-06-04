const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play-pause');
const progress = document.getElementById('progress');

function updateProgress() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const percent = (currentTime / duration) * 100;
  progress.value = percent;
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Add FontAwesome pause icon (replace with your preferred method)
  } else {
    audio.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>'; // Add FontAwesome play icon
  }
}

playBtn.addEventListener('click', togglePlayPause);

audio.addEventListener('timeupdate', updateProgress);

// Update progress bar on user interaction (optional)
progress.addEventListener('change', function() {
  const newTime = audio.duration * (progress.value / 100);
  audio.currentTime = newTime;
});