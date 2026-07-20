const express = require('express')
const Location = require('../model/locationModel')
const router = express.Router()

// Add Location

router.post( '/addlocation', async (req, res) => {

    try {

      console.log(req.body)
      const newLocation = new Location({

        treatmentname: req.body.treatmentname,

        subtreatmentname: req.body.subtreatmentname,

        locationname: req.body.locationname

      })

      await newLocation.save()

      res.status(200).send({

        message: 'Location Added Successfully'

      })

    }

    catch (error) {

      console.log(error)

      res.status(500).send({

        message: 'Failed To Add Location'

      })

    }

  }

)

module.exports = router