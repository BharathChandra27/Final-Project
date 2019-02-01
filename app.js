// Importing required Modules
const express = require('express')
const bp = require('body-parser')
const path = require('path')
const exhbs = require('express-handlebars')
const router = require('./routers/routes')

// Creating express app with a port
const portNo = 2000
const app = express()

// Setting up the dependencies 
app.use(express.static('public'))
app.set('view engine', 'handlebars')
app.engine('handlebars', exhbs({
    defaultLayout:'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')}))
app.use('/', router)

// Setting portNo to listen
app.listen(portNo, () => {
    console.log('Server Running at port: '+ portNo)
})