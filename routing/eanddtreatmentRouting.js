const express = require('express');
const router = express.Router();
const Treatment = require('../model/eanddtreatment');

// Get all treatments
router.get('/eanddtreatments', async (req, res) => {
  const data = await Treatment.find();
  res.send(data);
});

// Update Treatment
router.put('/edittreatment/:id', async (req, res) => {
  try {

    const updatedTreatment =
      await Treatment.findByIdAndUpdate(
        req.params.id,
        {
          treatmentName: req.body.treatmentName
        },
        { new: true }
      );

    res.status(200).json(updatedTreatment);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/eanddtreatments', async (req, res) =>{
   try{
     const registerdata = new Treatment(req.body);
    const result = await registerdata.save();
    if(result._id){
        res.status(200).send({message:'Treatment added successfully'});
    }
    else{
         res.status(400).send({message:'failed registration'});
    }
   }
   catch(err){
    res.status(400).send({message:'failed registration', error:err.message});
   }
});


// Delete treatment
router.delete('/eanddtreatments/:id', async (req, res) => {
  await Treatment.findByIdAndDelete(req.params.id);
  res.send({ message: 'Treatment deleted successfully' });
});

module.exports = router;