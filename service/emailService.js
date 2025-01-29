const nodemailer = require('nodemailer');
require('dotenv').config();

// Create email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Function to send email
const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${to}`);
    } catch (err) {
        console.error(`Error sending email to ${to}:`, err);
    }
};

// Function to send appointment confirmation email
const sendAppointmentEmail = async (patient, doctor, appointment) => {
    const patientMessage = `Dear ${patient.name},\n\nYour appointment is confirmed!\n\nService: ${appointment.serviceType}\nDate: ${appointment.date.toLocaleDateString()}\nTime: ${appointment.date.toLocaleTimeString()}\n\nThank you!`;
    const doctorMessage = `Dear Dr. ${doctor.name},\n\nYou have a new appointment!\n\nPatient: ${patient.name}\nService: ${appointment.serviceType}\nDate: ${appointment.date.toLocaleDateString()}\nTime: ${appointment.date.toLocaleTimeString()}\n\nThank you!`;

    await sendEmail(patient.email, 'Appointment Confirmation', patientMessage);
    await sendEmail(doctor.email, 'New Appointment Scheduled', doctorMessage);
};

module.exports = { sendEmail, sendAppointmentEmail };
