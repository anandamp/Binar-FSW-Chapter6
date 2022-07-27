require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mysql = require('mysql')

const db = mysql.createConnection({
    host: "192.168.64.2",
    user: "ananda",
    password: "",
    database: "binarchallenge"
})

const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json()) 
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use('/', require('./routes/routes'))


app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

