const { Sequelize } = require('sequelize')
const { check, validationResult } = require('express-validator')
const Cryptr = require('cryptr')
const SecretKey = 'SecretKey'
const CryptrConverter = new Cryptr(SecretKey);
const JWT = require('jsonwebtoken')
const db = require('../models')
db.sequelize.sync()
const { Users, Profile } = require('../models')
const req = require('express/lib/request')



exports.login = async (req, res) => {
    const { username, password } = req.body

    try {
        // Username Check
        Users.findOne({ where: { username: username }}).then(findUser => {
          if( !findUser ) {
              res.render('login', {message: 'the username or password you entered is incorrect!'})
          }
          else {
              // Password Check
              let passwordValid = CryptrConverter.decrypt(findUser.password)
              if ( passwordValid === password ) {
                  
                // Create Token Access
                let accessToken = JWT.sign({
                    id: findUser.id,
                    username: findUser.username,
                    email: findUser.email
                }, SecretKey, {
                    expiresIn: '1d'
                })

                result = {
                    id: findUser.id,
                    username: findUser.username,
                    email: findUser.email,
                    token: accessToken
                }

                // Get Profile Data
                Profile.findOne({ where: { user_id: findUser.id }}).then(profileData => {
                    res.cookie('token', JSON.stringify(result))
                    // res.json(accessToken)
                    // res.json({accessToken})
                    res.render('games')
                })

              } else {
                res.render('login', {message: 'the username or password you entered is incorrect!'})
              }
          }  
        })
     } catch (error) {
         console.log(error)
         res.status(400).send({ message: 'something went wrong'})
     }
}

exports.loginSql = (req, res) => {
    const { username, password } = req.body
    // Find User
    Users.findOne({ where : { username: username, password: password }}).then(response => {
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

exports.verifyToken = (req, res) => {
    let token_bearer = req.headers.authorization
    let TokenAuth = token_bearer.split(" ")

    if ( TokenAuth[0].toLowerCase() !== 'bearer' ) {
        res.status(400).send({ message: 'Invalid Token!' })
        
    } else {
        JWT.verify(TokenAuth[1], SecretKey, async function( err, resultToken ) {
            if ( err ) res.status(401).send({ message: 'Unauthorized' })
            if ( resultToken ) {
                // console.log(resultToken)
                try {
                    await Profile.findOne({ where: { user_id: resultToken.id }}).then(getProfile => {
                        res.status(200).send({
                            message: 'Successfull to get data profil!',
                            statusCode: 200,
                            results: {resultToken, getProfile}
                        })
                    })

                } catch (error) {
                    res.status(500).send({ message: 'Something error while getting data!'})
                }
            }
        })
    }
}






exports.logout = async (req, res) => {
    const Token = req.cookie
    if(!Token) return res.sendStatus(204)
    const users = await User.findAll({
        where:{
            Token: accessToken
        }
    })
    if(!users[0]) return res.sendStatus(204)
    const userID = users[0].id
    await Users.update({accessToken: null},{
        where:{
            id: userID
        }
    })
    res.clearCookie('accessToken')
    return res.sendStatus(200)
}


