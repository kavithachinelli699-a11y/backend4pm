const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({

  treatmentname: {

    type: String,
    required: true

  },

  subtreatmentname: {

    type: String,
    required: true

  },

  locationname: {

    type: String,
    required: true

  }

})

module.exports = mongoose.model(
  'locations',
  locationSchema
)