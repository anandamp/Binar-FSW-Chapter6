const express = require('express')
const routes = express.Router()

const loginController = require('../controller/login')
const signupController = require('../controller/signup')


// API
routes.post('/login', loginController.login)
routes.post('/signup', signupController.signup)
routes.post('/api/signup', signupController.signupSql)
routes.post('/api/login', loginController.loginSql)
routes.delete('/logout', loginController.logout)
routes.get('/dashboard', loginController.verifyToken)


// Views
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

routes.get('/profile', (req, res) => {
    res.render('profile.ejs')
})


module.exports = routes
