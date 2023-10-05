const Hero = require('../models/hero');
const posthero = async (req, res) => {
    console.log(req.body);
    try {
        const insertedData = await Hero.create(req.body);
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

const gethero = async (req, res) => {
    try {
        const hero = await Hero.find({});
        res.status(200).json({
            data: hero,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: 'Unable to get data',
            error: error,
        });
    }
};
const deletehero = async (req, res) => {
    try {
        const hero = await Hero.deleteOne({ _id: req.params.ID });
        res.status(200).json({
            success: true,
            message: 'Data deleted successfully',
            data: hero,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error occured while deleting the data',
            error: error,
        });
    }
};

const updatehero = async (req, res) => {
    try {
        const hero = await Hero.findByIdAndUpdate(req.params.ID, req.body);
        res.status(200).json({
            success: true,
            message: 'Data updated successfully.',
            data: hero,
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
    posthero, gethero, deletehero, updatehero,
};