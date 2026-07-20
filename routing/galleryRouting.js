const express= require('express');
const multer = require('multer');
const gallery = require('../model/Gallerymodel');
const galleryrouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public/uploads/');
        
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({storage : storage});


galleryrouter.get('/gallery', async (req, res) =>{
    try{
        const gallerydata = await gallery.find();
        if(gallerydata.length >0)
        {
            res.send({gallerydata, message: 'Gallery Fetched Successfully'});
        }
        else{
            res.send({message: 'No Gallery Found'});
        }
    }
    catch(err){
        res.send({message: 'Failed to fetch gallery', error: err.message});
    }
});

galleryrouter.post ('/gallery', upload.single('image'), async(req, res) =>{
    try{

        const {path, filename} = req.file;
        const {catname} = req.body;
        const gallerydata = new gallery ({path, filename, catname});
        const result = await gallerydata.save();
        if(result._id){
            res.send({result, message: 'Gallery Added Successfully'});
        }
        else{
            res.send({message: 'Failed to add gallery'})
        }
    
    }
    catch(err){
        res.send({message: 'Failed to add Gallery', error: err.message});
    }
})



module.exports = galleryrouter;
