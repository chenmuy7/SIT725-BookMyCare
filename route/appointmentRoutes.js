const express = require('express');
const { createAppointment } = require('../controllers/appointmentController');
const router = express.Router();

router.post('/appointments', createAppointment);

module.exports = router;
