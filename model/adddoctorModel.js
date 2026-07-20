const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({

  treatmentname: String,

  subtreatmentname: String,

  location: String,

  doctorqualification: String,

  doctorworkinghospital: String,

  doctorphonenumber: String,

  doctorname: String,

  doctorexperience: String,

  hospitaladdress: String,

  doctoremail: String

})

module.exports = mongoose.model( 'doctors', doctorSchema)