require('dotenv').config()

const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , bodyParser = require('body-parser')
    , accountController = require('./controllers/accountController')

const { 
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    REACT_APP_LOGIN,
    REACT_APP_SUCCESS_REDIRECT,
    REACT_APP_LOGOUT_REDIRECT,
    REACT_APP_FAILURE_REDIRECT
} = process.env

const app = express()

app.use( express.static( `${__dirname}/../build` ) )
app.use( bodyParser.json() )
app.use( session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}) )
app.use( passport.initialize() )
app.use( passport.session() )

massive(CONNECTION_STRING).then( db => app.set('db', db) )

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done) => {
        const db = app.get('db')
        const { given_name, family_name, sub } = profile._json
        // console.log(profile._json)

        db.find_peddler([sub]).then( response => {
            if(response[0]) {
                done(null, response[0].peddler_id)
            } else {
                db.create_peddler([given_name, family_name, sub]).then( response => {                
                    done(null, response[0].peddler_id)
                } )
            }
        } )
    }
))
passport.serializeUser( (id, done) => done(null, id) )
passport.deserializeUser( (id, done) => {
    const db = app.get('db')
    db.find_logged_in_peddler([id]).then( response => {
        done(null, response[0])
    } )
} )

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', { successRedirect: REACT_APP_SUCCESS_REDIRECT, failureRedirect: REACT_APP_FAILURE_REDIRECT }))
app.get('/auth/me', (req, res) => {
    if(!req.user) {
        res.status(404).send('Not logged in.')
    } else {
        res.status(200).send(req.user)
    }
} )
app.get('/logout', (req, res) => {
    req.logOut()
    // console.log('Logout successful.')
    res.redirect(REACT_APP_LOGOUT_REDIRECT)
})

// Dees endpoints
const { getAddresses, addNewAddress, deleteAddress } = accountController
app.post('/api/addNewAddress', addNewAddress)
app.get('/api/getAddresses', getAddresses)
app.delete('/api/deleteAddress/:addyID', deleteAddress)

app.listen( SERVER_PORT, () => console.log(`Let it do on port ${SERVER_PORT}`) )