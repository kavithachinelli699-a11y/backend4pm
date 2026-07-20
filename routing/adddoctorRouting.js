const express = require('express')
const Doctor = require('../model/adddoctorModel');
const router = express.Router()

// Add Doctor

router.post('/adddoctor', async (req, res) => {

    try {

      const doctor = new Doctor({

        treatmentname: req.body.treatmentname,

        subtreatmentname: req.body.subtreatmentname,

        location: req.body.location,

        doctorqualification: req.body.doctorqualification,

        doctorworkinghospital: req.body.doctorworkinghospital,

        doctorphonenumber: req.body.doctorphonenumber,

        doctorname: req.body.doctorname,

        doctorexperience: req.body.doctorexperience,

        hospitaladdress: req.body.hospitaladdress,

        doctoremail: req.body.doctoremail

      })

      await doctor.save()

      res.status(200).send({

        message: 'Doctor Added Successfully'

      })

    }

    catch (error) {

      console.log(error)

      res.status(500).send({

        message: 'Failed To Add Doctor'

      })

    }

  }

)

module.exports = router