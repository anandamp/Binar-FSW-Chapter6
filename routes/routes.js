const express = require('express')
const routes = express.Router()
const loginController = require('../controller/login')


// Post
routes.post('/login', loginController.login)
routes.post('/signup', loginController.signup)
routes.post('/sql/signup', loginController.signupSql)
routes.post('/sql/login', loginController.loginSql)

// Get
routes.get('/', (req, res) => {
    res.render('main.ejs')
})

routes.get('/main', (req, res) => {
    res.render('main.ejs')
})

routes.get('/games', (req, res) => {
    res.render('games.ejs')
})

routes.get('/login', (req, res) => {
    res.render('login.ejs')
})

routes.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

module.exports = routes