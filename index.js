import express from 'express'
import dotenv from 'dotenv'
import { supabase } from './Config/supabase.config.js';

dotenv.config();
const port = process.env.PORT

const app = express()

app.get('/', (req, res) => {
res.send('Hello World')
console.log(reg.query);
})

app.post('/', (req, res) => {
    res.send('Om os')
    
    })

    app.get('/test', async (req, res) => {
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

    

app.listen(port, () => {
    console.log(`Server runs on http://localhost:${port}`);
})

