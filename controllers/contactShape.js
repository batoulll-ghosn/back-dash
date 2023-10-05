const ContactShape = require('../models/contactShapeModel');
const postshape = async (req, res) => {
    console.log(req.body);
    try {
        const insertedData = await ContactShape.create(req.body);
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

const getshape = async (req, res) => {
    try {
        const fetched = await ContactShape.find({});
        res.status(200).json({
            data: fetched,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: 'Unable to get data',
            error: error,
        });
    }
};
const deletedshape = async (req, res) => {
    try {
        const deletedshape = await ContactShape.deleteOne({ _id: req.params.ID });
        res.status(200).json({
            success: true,
            message: 'Data deleted successfully',
            data: deletedshape,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error occured while deleting the data',
            error: error,
        });
    }
};

const updatedshape = async (req, res) => {
    try {
        const shape = await ContactShape.findByIdAndUpdate(req.params.ID, req.body);
        res.status(200).json({
            success: true,
            message: 'Data updated successfully.',
            data: shape,
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
    postshape, getshape, deletedshape, updatedshape,
};