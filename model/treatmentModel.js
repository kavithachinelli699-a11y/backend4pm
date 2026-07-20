const mongoose = require('mongoose')

const treatmentSchema = new mongoose.Schema({

  treatmentname: {

    type: String

  },

  treatmentimage: {

    type: String

  }

})

module.exports = mongoose.model(
  'Treatment',
  treatmentSchema
)