const mongoose = require('mongoose');

const subTreatmentSchema = new mongoose.Schema(
  {
  subTreatmentName: {
      type: String,
      required: true
    }
  },
);

module.exports = mongoose.model('SubTreatment',subTreatmentSchema);