const express = require('express')
const places = express.Router()
// require the Haunted Places model
const Places = require('../models/places.js')
const placesSeed = require('..models/seed.js')


// index page get route
places.get('/', (req, res) => {
  Places.find({}, (err, foundPlaces) => {
    res.json(foundPlaces)
  })
})

// seed route
places.get('/seed', (req, res)=> {
  Places.create(placesSeed, (err, places)=> {
    console.log(places)
    res.redirect('/')
  })
})

// create new place post route
places.post('/', (req, res) => {
  Places.create(req.body, (err, createdPlace) => {
    res.json(createdPlace)
  })
})


// delete route
places.delete('/:id', (req, res) => {
  Places.findByIdAndRemove(req.params.id, (err, deletedPlace) => {
    res.json(deletedPlace)
  })
})

// update place put route
places.put('/:id', (req, res) => {
  console.log('edit route is running');
  Places.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPlace) => {
    console.log(err);
    console.log(req.params.id);
    console.log(req.body);
    console.log(updatedPlace);
    res.json(updatedPlace)
  })
})



places.get('/dropdatabase/areyousure', (req, res)=> {
  Places.collection.drop();
  res.send('You dropped the seed, congrats! Visit <a href ="/seed">HERE</a> to reseed.')
})

module.exports = places;
