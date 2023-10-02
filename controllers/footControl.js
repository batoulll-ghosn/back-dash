const Foot = require('../models/footModel');

const addFoot = async (req, res) => {
    console.log(req.body);
    try {
        const newFoot = await Foot.create(req.body);
        res.status(200).json({
            success: true,
            message: 'New Foot added successfully',
            data: newFoot,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Footer  not added successfully',
            error: error,
        });
    }
};
const getFoot = async (req, res) => {
    try {
        const newFoot = await Foot.find({});
        res.status(200).json({
            data: newFoot,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: 'Unable to get Foots',
            error: error,
        });
    }
};

const deleteFoot = async (req, res) => {
    try {
        const newFoot = await Foot.deleteOne({ _id: req.params.id });
        res.status(200).json({
            success: true,
            message: 'Foot deleted successfully',
            data: newFoot,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error occured while deleting Footer data',
            error: error,
        });
    }
};

const updateFoot = async (req, res) => {
    try {
        const { _id } = req.params;
        const Foot = await Foot.findByIdAndUpdate(_id, req.body, { new: true });

        if (!newFoot) {
            return res.status(404).json({
                success: false,
                message: 'Foot not found.',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Foot updated successfully!',
            data: newFoot,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Unable to update Foot!',
            error: error.message,
        });
    }
};

module.exports = {
    addFoot, getFoot, deleteFoot, updateFoot
};