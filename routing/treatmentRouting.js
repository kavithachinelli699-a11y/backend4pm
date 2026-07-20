const express = require('express')
const multer = require('multer')
const Treatment = require('../model/treatmentModel')

const router = express.Router()

// Multer Storage

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

// Add Treatment Route

router.post( '/addtreatment', upload.single('treatmentimage'), async (req, res) => {

    try {

      // Check File

      if (!req.file) {

        return res.status(400).send({

          message: 'Please Upload Image'

        })

      }

      // Create Data

      const treatment = new Treatment({

        treatmentname: req.body.treatmentname,

        treatmentimage: req.file.filename

      })

      // Save Data

      await treatment.save()

      res.status(200).send({

        message: 'Treatment Added Successfully',

        data: treatment

      })

    }

    catch (error) {

      console.log(error)

      res.status(500).send({

        message: 'Failed To Add Treatment'

      })

    }

  }

)

module.exports = router