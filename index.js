import express from 'express'
import dotenv from 'dotenv'
// import { supabase } from './Config/supabase.config.js';
// import SongModel from './Modals/songs.model.js';
import {SongController} from './Controllers/song.controller.js'
import {artistController} from './Controllers/Artist.controller.js'
import {albumController} from './Controllers/Album.controller.js'
dotenv.config()
const app = express()

const port = process.env.PORT
app.use(express.urlencoded({ extended: true }));

app.use(SongController)
app.use(artistController)
app.use(albumController)



/*
app.get('/', (req, res) => {
res.send('Hello World')
console.log(reg.query);
})

app.post('/', (req, res) => {
    res.send('Om os')
    
    })

    
    app.get('/mySong', async (req, res) => {
        const { data, error } = await supabase.from('songs').select('title, id')
        if (error) { 
           console.error(error)
        } else { 
           console.log(data)
        }
    })

    app.get('/artists', async (reg, res) => {
        const {data, error} = await supabase.from('artists').select('*')
        if(error) {
            console.error(error)
        } else {
            console.log(data)
        }
    })

    app.get('/album', async (reg, res) => {
        const {data, error} = await supabase.from('albums').select('title, image, artists(id, name)')
        if(error) {
            console.error(error)
        } else {
            console.log(data)
        }
    })

    app.get('/insert', async (reg, res) => {
        const {data, error} = await supabase.from('artists').insert([
            { name: 'Omid', description: 'test' }, 
        ]);

        if(error) {
            console.error(error)
        } else {
            console.log(data)
        }
    })


    app.get('/test', async (reg, res) => {
        const data = await SongModel.getAllRecords()
        res.send(data);
    })
    */

app.listen(port, () => {
    console.log(`Server runs on http://localhost:${port}`);
})

