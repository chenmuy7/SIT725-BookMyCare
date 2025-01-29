const User = require('../models/User');

exports.getDoctors = async (req, res) => {
    try {
        const doctors = await User.find({ role: 'doctor' }, 'name email specialty');
        res.status(200).json(doctors);
    } catch (err) {
        res.status(500).send('Error fetching doctors');
    }
};
