import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config();

const port = process.env.PORT

app.get('/', (req, res) => {
res.send('Hello World')
console.log(reg.query);
})

app.post('/', (req, res) => {
    res.send('Om os')
    
    })
app.listen(port, () => {
    console.log(`Server runs on http://localhost:${port}`);
})

