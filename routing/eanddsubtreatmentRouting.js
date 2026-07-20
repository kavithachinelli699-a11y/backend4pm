const express = require('express');
const router = express.Router();
const SubTreatment = require('../model/eanddsubtreatmentModel');

// Get all treatments
router.get('/eanddsubtreatment', async (req, res) => {
  const data = await SubTreatment.find();
  res.send(data);
});

// Update Treatment
router.put('/editsubtreatment/:id', async (req, res) => {
  try {

    const updatedSubTreatment =
      await SubTreatment.findByIdAndUpdate(
        req.params.id,
        {
          subTreatmentName: req.body.subTreatmentName
        },
        { new: true }
      );

    res.json(updatedSubTreatment);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/eanddsubtreatments', async (req, res) =>{
   try{
     const registerdata = new SubTreatment(req.body);
    const result = await registerdata.save();
    if(result._id){
        res.status(200).send({message:'Sub Treatment added successfully'});
    }
    else{
         res.status(400).send({message:'failed registration'});
    }
   }
   catch(err){
    res.status(400).send({message:'failed registration', error:err.message});
   }
});


router.delete('/eanddsubtreatments/:id', async (req, res) => {
  try {

    await SubTreatment.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: 'Sub Treatment deleted successfully'
    });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;