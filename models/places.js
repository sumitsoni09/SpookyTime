const mongoose = require('mongoose')

const placesSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  boos: Number,
  description: String
})

const Places = mongoose.model('Places', placesSchema)

module.exports = Places;
