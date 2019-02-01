// Importing the required modules
const express = require('express')
const bp = require('body-parser')
const router = express.Router()

// Middleware to parse the incoming req with urlencoded.
router.use(bp.urlencoded( { extended: false}))

// Specifying the routing paths..
router.get('/home', (request, response) => {
    response.render('home', { style: 'home.css' })
    console.log('HOME..')
})
router.get('/profile', (request, response) => {
    response.render('profile', { style: 'profile.css'})
    console.log('PROFILE...')
})
router.get('/register', (request, response) => {
    response.render('register', { style: 'register.css' })
    console.log('REGISTER..')
})
router.get('/login', (request, response) => {
    response.render('login', { style: 'login.css'})
    console.log('LOGIN...')
})
router.post('/success', (request, response) => {
    const userEmail = request.body.userEmail
    const userPass = request.body.userPassword
    if (userEmail === "xyz@gmail.com" && userPass === "admin") {
        response.render('success', { style: 'success.css'})
        console.log('Successfully Logged In..')
        console.log(request.body)
    }else {
        response.send('<h3 style = "color: blue; font-size: 1.4rem; font-family: cursive; text-align: center; margin-top: 20px">Error!! Entered credentials are invalid. Please go back to previous page and try again...</h3>')
        console.log('Entered credentials are incorrect...')
    }
})
router.get('/login/help', (request, response) => {
    response.send('<h3 style = "color: blue; font-size: 1.4rem; font-family: cursive; text-align: center; margin-top: 20px; padding: 12px"> Email: xyz@gmail.com <br>Password: admin <br> This is confedential information, so do not share with any one.. &#9986;</h3>')
    console.log('NEED HELP...')
})
router.get('/logout', (request, response) => {
    response.render('logout', { style: 'logout.css'})
    console.log('LOGOUT...')
})
router.get('*', (request, response) => {
    response.send('<h3 style= "color: blue; font-size:1.5rem; text-align: center; padding:12px; margin-top: 20px">Sorry!! for the inconvenience, the entered url is not a valid one. Please check the url that you have entered or go to <br>"  http://localhost:2000/home "</h3>')
    console.log('Invalid url entered..')
})

// Exporting the routing file
module.exports = router