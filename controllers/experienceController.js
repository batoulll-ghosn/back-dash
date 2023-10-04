const Experience = require('../models/experienceModel');

const addExperience = async (req, res) => {
    console.log(req.body);
    try {
        const newExperience = await Experience.create(req.body);
        res.status(200).json({
            success: true,
            message: 'Experience added successfully',
            data: newExperience,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Experience not added successfully',
            error: error,
        });
    }
};

const getExperience = async (req, res) => {
    try {
        const newExperience = await Experience.find({});
        res.status(200).json({
            data: newExperience,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: 'Unable to get Experiences',
            error: error,
        });
    }
};

const deleteExperience = async (req, res) => {
    try {
        const newExperience = await Experience.deleteOne({ _id: req.params.id });
        res.status(200).json({
            success: true,
            message: 'Experience deleted successfully',
            data: newExperience,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error occured while deleting the data',
            error: error,
        });
    }
};

const updateExperience = async (req, res) => {
    try {
        const { id } = req.params;
        const newExperience = await Experience.findByIdAndUpdate(id, req.body, { new: true });

        if (!newExperience) {
            return res.status(404).json({
                success: false,
                message: 'Experience not found.',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Experience updated successfully.',
            data: newExperience,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Unable to update Experience',
            error: error.message,
        });
    }
};



module.exports = {
    addExperience, getExperience, deleteExperience, updateExperience
};