const express = require('express');
const app = express()
const mongoose = require('mongoose');
const session = require('express-session')



app.use(session({
  secret: 'spookytime',
  resave: false,
  saveUninitialized: false
}))

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res)=> {
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


mongoose.connect('mongodb://localhost:27017/haunted', {useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('Connected to Mongoose!')
})

app.listen(3000, () => {
  console.log('Spooky things on port 3000...')
})
