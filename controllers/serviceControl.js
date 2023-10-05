const Service = require('../models/service');
const postService = async (req, res) => {
    console.log(req.body);
    try {
        const insertedData = await Service.create(req.body);
        res.status(200).json({
            success: true,
            message: 'Data added successfully',
            data: insertedData,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Data not added successfully ',
            error: error,
        });
    }
};

const getService = async (req, res) => {
    try {
        const service = await Service.find({});
        res.status(200).json({
            data: service,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: 'Unable to get data',
            error: error,
        });
    }
};
const deleteService= async (req, res) => {
    try {
        const service = await Service.deleteOne({ _id: req.params.ID });
        res.status(200).json({
            success: true,
            message: 'Data deleted successfully',
            data: service,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error occured while deleting the data',
            error: error,
        });
    }
};

const updateService = async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.ID, req.body);
        res.status(200).json({
            success: true,
            message: 'Data updated successfully.',
            data: service,
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
    postService, getService, deleteService, updateService, 
};