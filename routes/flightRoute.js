const express = require("express");

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example)

//Get All Flights
router.get('/allflights', controller.getFlights);

//Get Single Flight
router.get('/flights/:id', controller.singleFlight)

//Add/Book A Flight
router.post('/bookflight', controller.bookFlight);

//Update Existing Flight
router.put('/updateflight/:id', controller.updateFlight);

//Delete Flight
router.delete('/deleteflight/:id', controller.deleteFlight);

//Listen for Requests

module.exports = router;