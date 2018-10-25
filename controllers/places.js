const express = require('express')
const places = express.Router()
// require the Haunted Places model
const Places = require('../models/places.js')

places.get('/', (req, res) => {
  Places.find({}, (err, foundPlaces) => {
    res.send('index page')
  })
})

places.post('/', (req, res) => {
  Places.create(req.body, (err, createdPlace) => {
    res.json(createdPlace)
  })
})

module.exports = places;
