const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema(
  {
    offerTitle: {
      type: String,
      required: true
    },

    offerText: {
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model(
  'Offer',
  offerSchema
);