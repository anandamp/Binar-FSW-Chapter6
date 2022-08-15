const { Sequelize } = require('sequelize')
const { check, validationResult } = require('express-validator')
const Cryptr = require('cryptr')
const SecretKey = 'SecretKey'
const CryptrConverter = new Cryptr(SecretKey);
const db = require('../models')
db.sequelize.sync()
const { Users, Profile } = require('../models')
const req = require('express/lib/request')
const ROLEs = ['ADMIN', 'USER']



exports.signup = async (req, res) => {
    const { username, password, email } = req.body

        // Find Username
        await Users.findOne({ where: {username: username}}).then(userResponse =>  {
            
            if(userResponse) {
                res.render('signup', { message: 'Username already exists, please use another one!'})
            } 

            else {
                // Find Email
                Users.findOne({ where: {email: email}}).then(emailFind => {
                    if(emailFind) {
                        res.render('signup', { message: 'Email already exists, please use another one!'})
                        } 

                        else {
                            // Encrypt Password
                            let newPasswordPassing = CryptrConverter.encrypt(password)

                            // User Create
                            let newDataUser = {
                                username: req.body.username,
                                email: req.body.email,
                                password: newPasswordPassing
                            }

                            Users.create(newDataUser).then(response => {
                                // Profile Create
                                let newProfileUser = {
                                    user_id: response.dataValues.id,
                                    firstname: req.body.firstname,
                                    lastname: req.body.lastname,
                                    gender: req.body.gender,
                                    age: req.body.age,
                                }

                                Profile.create(newProfileUser).then(resProfile => {
                                    res.render('login', { message: 'Succesfull to register, please log in with your account'})
                                })

                            }).catch(err => {
                                console.log(err)
                                res.status(500).send(error.message);
                                })                                    
                        }}
                )}             
        }).catch(err => {
            console.log(err)
            res.status(500).send(error.message);
        })       
}


exports.signupSql = (req, res) => {
    let newDataUser = {
        username: '',
        email: '',
        password: ''
    }
    // Create User
    Users.create(newDataUser).then(response => {
        let newProfileUser = {
            user_id: response.dataValues.id,
            firstname: "",
            lastname: "",
            gender: "",
            age: 0,
        }

        // Profile Create
        Profile.create(newProfileUser).then(resProfile => {
            res.send({
                message: 'Succesfull to create profile',
                result: resProfile,
                statusCode: 200,
            })
        }).catch(err => {
            console.log(err)
            res.send(err)
        })

    }).catch(err => {
        console.log(err)
        res.send(err)
    })
}

