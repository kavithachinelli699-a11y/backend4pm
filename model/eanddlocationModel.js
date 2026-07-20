const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
  {
    treatmentName: {
      type: String,
      required: true
    },

    subTreatmentName: {
      type: String,
      required: true
    },

    locationName: {
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model(
  'Location',
  locationSchema
);