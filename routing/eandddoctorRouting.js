const express = require('express');
const router = express.Router();

const Doctor = require('../model/eandddoctorModel');


// Get All Doctors
router.get('/eandddoctors', async (req, res) => {
  try {

    const doctors = await Doctor.find();

    res.status(200).json(doctors);

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});


// Get Single Doctor
router.get('/editdoctor/:id', async (req, res) => {
  try {

    const doctor =
      await Doctor.findById(req.params.id);

    res.status(200).json(doctor);

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});


// Add Doctor
router.post('/eandddoctors', async (req, res) => {
  try {

    const newDoctor = new Doctor({
      treatmentName: req.body.treatmentName,
      subTreatmentName: req.body.subTreatmentName,
      doctorName: req.body.doctorName,
     
    });

    const result = await newDoctor.save();

    res.status(201).json({
      message: 'Doctor Added Successfully',
      data: result
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: 'Failed to Add Doctor',
      error: error.message
    });
  }
});


// Update Doctor
router.put('/editdoctor/:id', async (req, res) => {
  try {

    const updatedDoctor =
      await Doctor.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json(updatedDoctor);

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});


// Delete Doctor
router.delete('/eandddoctors/:id', async (req, res) => {
  try {

    await Doctor.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: 'Doctor Deleted Successfully'
    });

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});

module.exports = router;