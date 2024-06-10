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



function playMusic(pickSong) {
  const myPlayer = document.getElementById('musicPlayer');
  const controller = document.getElementById('controller');
  myPlayer.style.display ='block';
  console.log(pickSong);
  let myMusics = `<source src="../../assets/media/musics/${pickSong}" type="audio/mpeg">`
  controller.innerHTML = myMusics;


  
}

function closePlayer(){
  const closePlayer = document.getElementById('musicPlayer');
  closePlayer.style.display='none';

}


const navigation = document.getElementById('navMobile');
const navBut = document.getElementById('hiddenIcone');
const nayBeOpen = document.getElementById('apearIcone');
const main = document.getElementById('Main');
const secondOpac = document.getElementById('secondPage');
function openNav() {
    navigation.style.display='block';
    navBut.style.display='none';
    nayBeOpen.style.display='block';
    main.style.opacity ='0.2';
    secondOpac.style.opacity='0.2';
}
function closeNav() {
    navigation.style.display='none';
    navBut.style.display='block';
    nayBeOpen.style.display='none';
    main.style.opacity ='1';
    secondOpac.style.opacity='1';
}

function changeImage(newImage) {
    document.getElementById('imgLarge').src = newImage;
  }


  const secondPage = document.getElementById('secondPage');
  const firstPage = document.getElementById('Main');
  const firstColumn = document.getElementById('firstColumn');
  const secondColumn = document.getElementById('secondColumn');
  const thirdColumn = document.getElementById('ThirdOne');
  function playList() {
   
    firstPage.style.display = "none";
    secondPage.style.display = "block";
    navigation.style.display='none';
    secondOpac.style.opacity='1';
    firstColumn.style.display = 'none'
    thirdColumn.style.display = 'none';
    secondColumn.style.display = 'block';

  }

  function musics() {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
    navigation.style.display='none';
    secondOpac.style.opacity='1';
    firstColumn.style.display = 'block'
    secondColumn.style.display = 'none';
    thirdColumn.style.display = 'none';
  }

  function playallList(){
    firstPage.style.display = "none";
    secondPage.style.display = "block";
    navigation.style.display='none';
    secondOpac.style.opacity='1';
  }
