const express = require('express')
const places = express.Router()
// require the Haunted Places model
const Places = require('../models/places.js')
const User = require('../models/users.js')

// index page get route
places.get('/', (req, res) => {
  Places.find({}, (err, foundPlaces) => {
    res.json(foundPlaces)
  })
})

places.get('/:id', (req, res) => {
  Places.findById(req.params.id, (err, foundPlace) => {
    res.json(foundPlace)
  })
})

places.delete('/:id', (req, res) => {
  Places.findByIdAndRemove(req.params.id, (err, deletedPlace) => {
    res.json(deletedPlace)
  })
})

// create new place post route
places.post('/', (req, res) => {
  Places.create(req.body, (err, createdPlace) => {
    res.json(createdPlace)
  })
})

// update place put route
places.put('/:id', (req, res) => {
  Places.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPlace) => {
    res.json(updatedPlace)
  })
})

module.exports = places;
