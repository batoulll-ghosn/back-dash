const contactForm = require('../models/contactmodel');
const postContact = async (req, res) => {
    console.log(req.body);
    try {
        const insertedData = await contactForm.create(req.body);
        res.status(200).json({
            success: true,
            message: 'Data added successfully',
            data: insertedData,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Data not added successfully',
            error: error,
        });
    }
};

const getContact = async (req, res) => {
    try {
        const batoul = await contactForm.find({});
        res.status(200).json({
            data: batoul,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: 'Unable to get data',
            error: error,
        });
    }
};
const deleteContact = async (req, res) => {
    try {
        const batoul = await contactForm.deleteOne({ _id: req.params.ID });
        res.status(200).json({
            success: true,
            message: 'Data deleted successfully',
            data: batoul,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error occured while deleting the data',
            error: error,
        });
    }
};

const updateContact = async (req, res) => {
    try {
        const batoul = await contactForm.findByIdAndUpdate(req.params.ID, req.body);
        res.status(200).json({
            success: true,
            message: 'Data updated successfully.',
            data: batoul,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Unable to update data',
            error: error,
        });
    }
};

module.exports = {
    postContact, getContact, deleteContact, updateContact,
};