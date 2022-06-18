const express = require('express')

const app = express()

app.get('/', (req, res, next)=> {
    res.sendFile(`${__dirname}/views/index.html`) 
})

app.get('/about', (req, res, next)=> {
    res.sendFile(`${__dirname}/views/about.html`) 
})

app.get('/works', (req, res, next)=> {
    res.sendFile(`${__dirname}/views/works.html`) 
})

const port =3000

app.listen(port, () => console.log(`Listening port: ${port}`))