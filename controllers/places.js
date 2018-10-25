const express = require('express')
const places = express.Router()
// require the Haunted Places model
const Places = require('../models/places.js')

// index page get route
places.get('/', (req, res) => {
  Places.find({}, (err, foundPlaces) => {
    res.json(foundPlaces)
  })
})



// create new place post route
places.post('/', (req, res) => {
  Places.create(req.body, (err, createdPlace) => {
    res.json(createdPlace)
  })
})

module.exports = places;
