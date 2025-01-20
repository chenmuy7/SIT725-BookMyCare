const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Models
const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ['patient', 'doctor', 'admin'], default: 'patient' },
}));

const Appointment = mongoose.model('Appointment', new mongoose.Schema({
    patientId: String,
    doctorId: String,
    date: Date,
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
}));

// Routes
// User registration
app.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const newUser = new User({ name, email, password, role });
        await newUser.save();
        
        // Send activation email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Account Activation',
            text: 'Click the link to activate your account.',
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) console.error(err);
            else console.log('Email sent:', info.response);
        });

        res.status(201).send('User registered successfully!');
    } catch (err) {
        res.status(500).send('Error registering user:', err.message);
    }
});

// Appointment booking
app.post('/appointments', async (req, res) => {
    const { patientId, doctorId, date } = req.body;

    try {
        const appointment = new Appointment({ patientId, doctorId, date });
        await appointment.save();
        res.status(201).send('Appointment booked successfully!');
    } catch (err) {
        res.status(500).send('Error booking appointment:', err.message);
    }
});

// Appointment list
app.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (err) {
        res.status(500).send('Error retrieving appointments:', err.message);
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
