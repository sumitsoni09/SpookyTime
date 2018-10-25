const mongoose = require('mongoose')

const placesSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  boos: Number
})

const Places = mongoose.model('Places', placesSchema)

module.exports = Places;
