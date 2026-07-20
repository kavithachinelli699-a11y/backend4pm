const mongoose = require('mongoose')

const offerSchema = new mongoose.Schema({

  offertitle: {

    type: String,
    required: true

  },

  offertext: {

    type: String,
    required: true

  }

})

module.exports = mongoose.model(

  'offers',

  offerSchema

)