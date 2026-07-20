const express = require('express')
const Offer = require('../model/addoffersModel')
const router = express.Router()

// Add Offer

router.post( '/addoffer', async (req, res) => {

    try {

      const offer = new Offer({

        offertitle: req.body.offertitle,

        offertext: req.body.offertext

      })

      await offer.save()

      res.status(200).send({

        message: 'Offer Added Successfully'

      })

    }

    catch (error) {

      console.log(error)

      res.status(500).send({

        message: 'Failed To Add Offer'

      })

    }

  }

)

module.exports = router