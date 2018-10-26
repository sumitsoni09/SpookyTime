const express = require('express');
const app = express()
const mongoose = require('mongoose');
const session = require('express-session')
const db = mongoose.connection;


app.use(session({
  secret: 'spookytime',
  resave: false,
  saveUninitialized: false
}))

app.use(express.json())
app.use(express.static('public'))

//extended: false - does not allow nested objects in query strings
app.use(express.urlencoded({extended: false}));

//PORT
//allow use of Heroku's port or your own local port, depending on the enviornment
const PORT = process.env.PORT || 3000

//DATABASE
//How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'haunted';

//ROUTES
app.get('/app', (req, res)=> {
  if(req.session.currentUser) {
    res.json(req.session.currentUser)
  } else {
    res.status(401).json({
      status: 401,
      message: 'not logged in'
    })
  }
})



const sessionsController = require('./controllers/sessions.js')
app.use('/sessions', sessionsController)

const usersController = require('./controllers/users.js')
app.use('/users', usersController)

const placesController = require('./controllers/places.js')
app.use('/places', placesController)

//CONNECT TO MONGO
mongoose.connect(MONGODB_URI, {useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('Connected to Mongoose!')
})

//ERROR / SUCCESS
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//OPEN THE CONNECTION TO MONGO
db.on('open', () => {});
//Listener localhost://3000 - this will reroute to index
app.listen(PORT, () => console.log('Spooky things on port ', PORT));
