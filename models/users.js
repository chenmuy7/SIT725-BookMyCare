const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['doctor', 'user'], required: true },
    specialty: String,  // Only for doctors
    dob: Date,  // Only for clients
});

module.exports = mongoose.model('User', userSchema);