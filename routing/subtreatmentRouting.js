const express = require('express')

const multer = require('multer')

const SubTreatment = require('../model/subtreatmentModel')

const router = express.Router()

// Storage

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, './public/uploads')

  },

  filename: (req, file, cb) => {

    cb(
      null,
      Date.now() + '-' + file.originalname
    )

  }

})

// Upload

const upload = multer({

  storage: storage

})

// Add SubTreatment

router.post(

  '/addsubtreatment',

  upload.single('subtreatmentimage'),

  async (req, res) => {

    try {

      if (!req.file) {

        return res.status(400).send({

          message: 'Please Upload Image'

        })

      }

      const subtreatment = new SubTreatment({

        treatmentname: req.body.treatmentname,

        subtreatmentname: req.body.subtreatmentname,

        subtreatmentimage: req.file.filename

      })

      await subtreatment.save()

      res.status(200).send({

        message: 'SubTreatment Added Successfully'

      })

    }

    catch (error) {

      console.log(error)

      res.status(500).send({

        message: 'Failed To Add SubTreatment'

      })

    }

  }

)

module.exports = router