import express from 'express'
const app = express()
const port = 3000

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