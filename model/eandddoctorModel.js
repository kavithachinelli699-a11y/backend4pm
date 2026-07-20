const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    treatmentName: {
      type: String,
      required: true
    },

    subTreatmentName: {
      type: String,
      required: true
    },

    doctorName: {
      type: String,
      required: true
    }

}
);

module.exports = mongoose.model(
  'Doctor',
  doctorSchema
);