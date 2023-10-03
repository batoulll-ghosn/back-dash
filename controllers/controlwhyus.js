const Whyus = require('../models/whyus'); // Update the model import

const postw = async (req, res) => {
    console.log(req.body);
    try {
        const insertedData = await Whyus.create(req.body);
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

const getw = async (req, res) => {
    try {
        const whyus = await Whyus.find({});
        res.status(200).json({
            data: whyus,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: 'Unable to get data',
            error: error,
        });
    }
};

const deletedataw = async (req, res) => {
    try {
        const whyus = await Whyus.deleteOne({ _id: req.params.ID });
        res.status(200).json({
            success: true,
            message: 'Data deleted successfully',
            data: whyus,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error occurred while deleting the data',
            error: error,
        });
    }
};

const updatedataw = async (req, res) => {
    try {
        const whyus = await Whyus.findByIdAndUpdate(req.params.ID, req.body);
        res.status(200).json({
            success: true,
            message: 'Data updated successfully.',
            data: whyus,
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
    postw,
    getw,
    deletedataw,
    updatedataw,
};
