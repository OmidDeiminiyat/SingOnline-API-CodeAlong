



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
        //   console.log(songs);
      } catch (error) {
          console.error('Error fetching data from Supabase:', error);
      }
  }

  function displaySongs(recivedData) {
    
       const songsList = document.getElementById('firstSupaData');
      
       
       songsList.innerHTML = ''
       let rightCol = `<span class="SingleMussic" >`
       recivedData.forEach((Data, index) => {
        console.log('Recived data is:' + Data);
        rightCol += `<div class="everyRow" >
           <img class="GetOver" src="assets/images/playList/${Data.image}" alt="">
           <span class="listes">
           <h5>${Data.title}</h5>
           <p onclick="playMusic('${Data.Track}')" >Listen to music</p>
           </span> </div>
        `   
    });
    rightCol += `</span>`
    
    songsList.innerHTML = rightCol;
}


  fetchSongs();


  function handleClick() {

  const MyMusic = dosument.getElementById('musicPlayer');
    console.log("Button clicked!");
    MyMusic.style.display ='block';
}
const PlayIt = document.getElementById('PlayMusic');
PlayIt.addEventListener("click", handleClick);

