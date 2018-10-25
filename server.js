const express = require('express');
const app = express()
const mongoose = require('mongoose');


app.use(express.json())
app.use(express.static('public'))

const sessionsController = require('./controllers/sessions.js')
app.use('/sessions', sessionsController)

const usersController = require('./controllers/users.js')
app.use('/users', sessionsController)

const placesController = require('./controllers/places.js')
app.use('/places', sessionsController)


mongoose.connect('mongodb://localhost:27017/haunted', {useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('Connected to Mongoose!')
})

app.listen(3000, () => {
  console.log('Spooky things on port 3000...')
})
