const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    treatmentName: String,
    subTreatmentName: String,
    doctorName: String,
    patientName: String,
    patientPhone: String,
    patientEmail: String,
    appointmentDate: String,
    appointmentTime: String,
    message: String,

    status: {
      type: String,
      default: 'Pending'
    }
  },
);

module.exports = mongoose.model(
  'Appointment',
  appointmentSchema
);