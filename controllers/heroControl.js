const Hero = require('../models/heroModel');

const addHero = async (req, res) => {
    console.log(req.body);
    try {
        const newHero = await Hero.create(req.body);
        res.status(200).json({
            success: true,
            message: 'New Hero added successfully',
            data: newHero,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Hero not added successfully',
            error: error,
        });
    }
};
const getHero = async (req, res) => {
    try {
        const newHero = await Hero.find({});
        res.status(200).json({
            data: newHero,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: 'Unable to get Heros',
            error: error,
        });
    }
};

const deleteHero = async (req, res) => {
    try {
        const newHero = await Hero.deleteOne({ _id: req.params.ID });
        res.status(200).json({
            success: true,
            message: 'Hero deleted successfully',
            data: newHero,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error occured while deleting the data',
            error: error,
        });
    }
};

const updateHero = async (req, res) => {
    try {
        const newHero = await Hero.findByIdAndUpdate(req.params.ID, req.body);
        res.status(200).json({
            success: true,
            message: 'Hero updated successfully.',
            data: newHero,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Unable to update Hero',
            error: error.message,
        });
    }
};



module.exports = {
    addHero, getHero, deleteHero, updateHero
};