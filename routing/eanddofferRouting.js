const express = require('express');
const router = express.Router();
const Offer = require('../model/eanddoffersModel');


// Add Offer
router.post('/eanddoffers', async (req, res) => {
  try {

    const newOffer = new Offer({
      offerTitle: req.body.offerTitle,
      offerText: req.body.offerText
    });

    const result = await newOffer.save();

    res.status(201).json({
      message: 'Offer Added Successfully',
      data: result
    });

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});


// Get All Offers
router.get('/eanddoffers', async (req, res) => {
  try {

    const offers = await Offer.find();

    res.status(200).json(offers);

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});


// Get Single Offer
router.get('/editoffer/:id', async (req, res) => {
  try {

    const offer =
      await Offer.findById(req.params.id);

    res.status(200).json(offer);

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});


// Update Offer
router.put('/editoffer/:id', async (req, res) => {
  try {

    const updatedOffer =
      await Offer.findByIdAndUpdate(
        req.params.id,
        {
          offerTitle: req.body.offerTitle,
          offerText: req.body.offerText
        },
        {
          new: true
        }
      );

    res.status(200).json(updatedOffer);

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});


// Delete Offer
router.delete('/eanddoffers/:id', async (req, res) => {
  try {

    await Offer.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: 'Offer Deleted Successfully'
    });

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});

module.exports = router;