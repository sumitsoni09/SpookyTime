// Dependencies
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const session = require('express-session')
const dotenv = require('dotenv').config()
const db = mongoose.connection;

//PORT
//allow use of Heroku's port or your own local port, depending on the enviornment
const PORT = process.env.PORT || 3000

const User = require('./models/users.js')
const Places = require('./models/places.js')
const store = require('./models/store.js')

const sessionsController = require('./controllers/sessions.js')
const usersController = require('./controllers/users.js')
const placesController = require('./controllers/places.js')
const storeController = require('./controllers/store.js')


app.use(session({
 secret: process.env.SECRET,
 resave: false,
 saveUninitialized: false
}))

// middleware
app.use(express.json())
app.use(express.static('public'))

//extended: false - does not allow nested objects in query strings
app.use(express.urlencoded({extended: false}));


//ROUTES
app.get('/app', (req, res)=>{
    if(req.session.currentUser){
        res.json(req.session.currentUser);
    } else {
        res.status(401).json({
            status:401,
            message:'not logged in'
        });
    }
})



app.use('/sessions', sessionsController)

app.use('/users', usersController)

app.use('/places', placesController)

app.use('/', storeController)

//ERROR / SUCCESS
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//DATABASE
//How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'haunted';

//CONNECT TO MONGO
mongoose.connect(MONGODB_URI, {useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('Connected to Mongoose!')
})

//OPEN THE CONNECTION TO MONGO
db.on('open', () => {});
//Listener localhost://3000 - this will reroute to index
app.listen(PORT, () => console.log('Spooky things on port ', PORT));
