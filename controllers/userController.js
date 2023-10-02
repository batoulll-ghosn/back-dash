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
module.exports = { user, getUser };