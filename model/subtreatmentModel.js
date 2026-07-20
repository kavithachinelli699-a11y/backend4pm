const mongoose = require('mongoose')

const subtreatmentSchema = new mongoose.Schema({

  treatmentname: {

    type: String,
    required: true

  },

  subtreatmentname: {

    type: String,
    required: true

  },

  subtreatmentimage: {

    type: String,
    required: true

  }

})

module.exports = mongoose.model(

  'subtreatments',

  subtreatmentSchema

)