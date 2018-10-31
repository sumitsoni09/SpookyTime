const mongoose = require('mongoose')

const placesSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  boos: String,
  description: String
})

const Places = mongoose.model('Places', placesSchema)

module.exports = Places;
