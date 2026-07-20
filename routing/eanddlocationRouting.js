const express = require('express');
const router = express.Router();

const Location = require('../model/eanddlocationModel');


// Get All Locations
router.get('/eanddlocations', async (req, res) => {
  try {

    const data = await Location.find();

    res.status(200).json(data);

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});


// Get Single Location
router.get('/editlocation/:id', async (req, res) => {
  try {

    const location =
      await Location.findById(
        req.params.id
      );

    res.status(200).json(location);

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});

router.post('/eanddlocations', async (req, res) => {

  try {

    const newLocation = new Location({
      treatmentName: req.body.treatmentName,
      subTreatmentName: req.body.subTreatmentName,
      locationName: req.body.locationName
    });

    const result = await newLocation.save();

    res.status(201).json({
      message: 'Location Added Successfully',
      data: result
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: 'Failed to add location',
      error: error.message
    });
  }
});

// Update Location
router.put('/editlocation/:id', async (req, res) => {
  try {

    const updatedLocation =
      await Location.findByIdAndUpdate(
        req.params.id,
        {
          treatmentName:
            req.body.treatmentName,

          subTreatmentName:
            req.body.subTreatmentName,

          locationName:
            req.body.locationName
        },
        {
          new: true
        }
      );

    res.status(200).json(updatedLocation);

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});



// Delete Location
router.delete('/eanddlocations/:id', async (req, res) => {
  try {

    await Location.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:
        'Location Deleted Successfully'
    });

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});

module.exports = router;