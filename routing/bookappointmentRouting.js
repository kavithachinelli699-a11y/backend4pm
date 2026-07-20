const express = require('express');
const router = express.Router();
const Appointment  = require('../model/bookappointmentModel');


router.post('/bookappointment', async (req, res) => {

  try {

    const appointment =
      new Appointment(req.body);

    await appointment.save();

    res.status(200).json({
      message:
      'Appointment Saved Successfully'
    });

  } catch (error) {

    console.log(error);

    res.status(500).json(error);
  }
});

router.put('/appointmentstatus/:id', async (req, res) => {

  try {

    const updatedAppointment =
      await Appointment.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status
        },
        {
          new: true
        }
      );

    res.json(updatedAppointment);

  } catch (error) {

    res.status(500).json(error);
  }
});

router.get(
  '/bookappointmentdata',
  async (req, res) => {

    try {

      const appointments =
        await Appointment.find();

      res.json(appointments);

    } catch (error) {

      res.status(500).json(error);
    }
  }
);

module.exports = router;