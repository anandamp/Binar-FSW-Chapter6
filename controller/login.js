const { Sequelize } = require('sequelize')

const db = require('../models')
db.sequelize.sync()
const { User } = require('../models')

exports.login = (req, res) => {
    res.send('login')
}

exports.signup = (req, res) => {
    res.send('ok from sign up')
}

exports.signupSql = (req, res) => {
    let newDataUser = {
        username: 'ananda',
        email: 'ananda@gmail.com',
        password: '123456'
    }
    User.create(newDataUser).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
    res.send('ok')
}

exports.loginSql = (req, res) => {
    const { username, email, password } = req.body
    User.findOne({ where : { username: username, password: password }}).then(response => {
        console.log(response)
        res.send({
            message: 'Succesfull to get data',
            result: response,
            statusCode: 200,
        })
    }).catch(err => {
        console.log(err)
        res.send('Failed to get data')
    })
}

