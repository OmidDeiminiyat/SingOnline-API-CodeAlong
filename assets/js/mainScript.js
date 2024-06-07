const navigation = document.getElementById('navMobile');
const navBut = document.getElementById('hiddenIcone');
const nayBeOpen = document.getElementById('apearIcone');
const main = document.getElementById('Main');
function openNav() {
    navigation.style.display='block';
    navBut.style.display='none';
    nayBeOpen.style.display='block';
    main.style.opacity ='0.2';
}
function closeNav() {
    navigation.style.display='none';
    navBut.style.display='block';
    nayBeOpen.style.display='none';
    main.style.opacity ='1';
}

function changeImage(newImage) {
    document.getElementById('imgLarge').src = newImage;
  }


  


  import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'


  const supabaseUrl = 'https://diypgagdxkcxouvczafo.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpeXBnYWdkeGtjeG91dmN6YWZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA2ODksImV4cCI6MjAyOTk5NjY4OX0.VrUT62xkoBjL3Q2XoI5ObxkVZRFJzBIWI9kEHSQu1_s';
  const supabase = createClient(supabaseUrl, supabaseKey);

  async function fetchSongs() {
 
      try {
          let { data: songs, error } = await supabase
              .from('songs')
              .select('*');

          if (error) throw error;
          displaySongs(songs)
          console.log(songs);
      } catch (error) {
          console.error('Error fetching data from Supabase:', error);
      }
  }

  function displaySongs(recivedData) {
    
       const songsList = document.getElementById('firstSupaData');
      
       
       songsList.innerHTML = ''
       let rightCol = `<div class="SingleMussic">`
       recivedData.forEach((Data, index) => {
        console.log('Recived data is:' + Data);
        rightCol += `
           <img class="GetOver" src="assets/images/playList/${Data.image}" alt="">
           <span class="listes">
           <h5>${Data.title}</h5>
           <p>Don't look up...</p>
           </span> 
        `   
    });
    rightCol += `</div>`
    
    songsList.innerHTML = rightCol;
}

  // Fetch and display songs on page load
  fetchSongs();


  function handleClick() {
    // Your code to run when the button is clicked
  const MyMusic = dosument.getElementById('musicPlayer');
    console.log("Button clicked!");
    MyMusic.style.display ='block';
}
const PlayIt = document.getElementById('PlayMusic');
PlayIt.addEventListener("click", handleClick);




  

