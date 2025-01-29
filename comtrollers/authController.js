const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('../services/emailService');

exports.signup = async (req, res) => {
    const { name, email, password, role, specialty, dob } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, role, specialty, dob });
        await newUser.save();

        await sendEmail(email, 'Registration Successful', `Dear ${name},\n\nYour registration was successful.\n\nThank you!`);
        
        res.status(201).send('User registered successfully!');
    } catch (err) {
        res.status(400).send('Error registering user');
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send('User not found');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).send('Invalid credentials');

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).send('Error logging in');
    }
};
