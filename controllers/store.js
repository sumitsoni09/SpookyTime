const express = require('express')
const store = express.Router()
// require the Haunted Places model
const Store = require('../models/store.js')
const storeSeed = require('../models/storeseed.js')


store.get('/store', (req, res) => {
  Store.find({}, (err, foundStore) => {
    res.json(foundStore)
  })
})

// seed route
store.get('/store/seed', (req, res)=> {
  Store.create(storeSeed, (err, store)=> {
    console.log(store)
    res.redirect('/')
  })
})

// create new place post route
store.post('/store', (req, res) => {
  Store.create(req.body, (err, createdStore) => {
    res.json(createdStore)
  })
})


// delete route
store.delete('/store/:id', (req, res) => {
  Store.findByIdAndRemove(req.params.id, (err, deletedStore) => {
    res.json(deletedStore)
  })
})

// update place put route
store.put('/store/:id', (req, res) => {
  Store.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedStore) => {
    res.json(updatedStore)
  })
})


module.exports = store;
