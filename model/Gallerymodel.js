const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    path:{

    },
    filename:{
          type: String,
          required: true,
    },
    catname:{
        type:String,
        required: true,
    }
})

module.exports=mongoose.model("gallery", gallerySchema);
