const USER = require('../models/userModel');
const user = async (req, res) => {
    console.log(req.body);
    try {
        const newUser = await USER.create(req.body);
        res.status(200).json({
            success: true,
            message: 'USER added successfully',
            data: newUser,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'USER not added successfully',
            error: error,
        });
    }
};

const getUser = async (req, res) => {
    try {
        const newUser = await USER.find({});
        res.status(200).json({
            data: newUser,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: 'Unable to get user',
            error: error,
        });
    }
};

const checkCredentials = async (email, password) => {
    try {
        const user = await USER.findOne({ email, password });

        return user !== null;
    } catch (error) {
        throw error;
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const exists = await checkCredentials(email, password);

        if (exists) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.json({ success: false, message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
};

module.exports = { user, getUser, login };