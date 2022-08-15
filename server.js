require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mysql = require('mysql')
const db = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

const port = process.env.PORT
const app = express()


app.use(express.static('public'))
app.use(express.json()) 
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(morgan('dev'))
app.use('/', require('./routes/routes'))


app.set('view engine', 'ejs')


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})





