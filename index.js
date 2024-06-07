import express from 'express'
import dotenv from 'dotenv'
// import { supabase } from './Config/supabase.config.js';
// import SongModel from './Modals/songs.model.js';
import {SongController} from './Controllers/song.controller.js'
import {artistController} from './Controllers/Artist.controller.js'
import {albumController} from './Controllers/Album.controller.js'
import {profileController} from './myController/profile.controller.js'
dotenv.config()
const app = express()

const port = process.env.PORT
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Velkomen til mit API');
})
app.use(SongController)
app.use(artistController)
app.use(albumController)
app.use(profileController)



app.listen(port, () => {
    console.log(`Server runs on http://localhost:${port}`);
})

