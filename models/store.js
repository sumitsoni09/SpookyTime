const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
  description: String
})

const Store = mongoose.model('Store', storeSchema)
module.exports = Store;
