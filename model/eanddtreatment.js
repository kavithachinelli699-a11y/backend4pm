const mongoose = require("mongoose");

const treatmentSchema = new mongoose.Schema(
{
    tid:{
        type:Number,
        required: true
    },
    treatmentName:{
        type:String,
        required:true
    }
},
   
);

module.exports = mongoose.model(
    "eanddtreatment",
    treatmentSchema
);