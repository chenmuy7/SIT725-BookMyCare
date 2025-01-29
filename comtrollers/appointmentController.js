const Appointment = require('../models/Appointment');
const User = require('../models/User');
const { sendAppointmentEmail } = require('../services/emailService');

exports.createAppointment = async (req, res) => {
    const { userId, doctorId, date, serviceType } = req.body;

    try {
        const appointment = new Appointment({ userId, doctorId, date, serviceType });
        await appointment.save();

        const patient = await User.findById(userId);
        const doctor = await User.findById(doctorId);

        await sendAppointmentEmail(patient, doctor, appointment);
        res.status(201).send('Appointment created successfully!');
    } catch (err) {
        res.status(500).send('Error creating appointment');
    }
};
