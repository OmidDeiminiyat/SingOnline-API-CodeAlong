import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const url = 'https://diypgagdxkcxouvczafo.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpeXBnYWdkeGtjeG91dmN6YWZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA2ODksImV4cCI6MjAyOTk5NjY4OX0.VrUT62xkoBjL3Q2XoI5ObxkVZRFJzBIWI9kEHSQu1_s';
const database = createClient(url, key);

async function fetchArtist() {

    try {
        let { data: artists, error } = await database
            .from('artists')
            .select('*');

        if (error) throw error;
        displayArtists(artists)
        ArtistFooter(artists)
        console.log(artists);
    } catch (error) {
        console.error('Error fetching data from Supabase:', error);
    }
}

function displayArtists(ArtistData) {
  
     const singers = document.getElementById('singers');
    
     
     singers.innerHTML = ''
     let allSingers = `<div class="middle-second">`
     ArtistData.forEach((Data, index) => {
      console.log('Recived data is:' + Data);
      allSingers += `
      <figure onclick="profilerecived('${Data.name}', '${Data.image}', '${Data.description}')">
      <img src="assets/images/playList/${Data.image}" alt="">
       <h6>New singer</h6>
      <p>${Data.name}</p>
  </figure> 
      `   
  });
  allSingers += `</div>`
  
  singers.innerHTML = allSingers;
}


fetchArtist();


function ArtistFooter(namesrecived) {
    const names = document.getElementById('artistNames');

    let artistLists = ` <h3>List of singers</h3><hr>
    <span id="Singers">`
    namesrecived.forEach((datas, index) => {
        artistLists += `<p>${datas.name}</p>`
    })
    artistLists += `</span>`
    names.innerHTML = artistLists;
}





