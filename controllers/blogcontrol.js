const Blog = require('../models/blogmodel');
const postblog = async (req, res) => {
    console.log(req.body);
    try {
        const insertedData = await Blog.create(req.body);
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

const getblog = async (req, res) => {
    try {
        const blog = await Blog.find({});
        res.status(200).json({
            data: blog,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: 'Unable to get data',
            error: error,
        });
    }
};
const deletedblog = async (req, res) => {
    try {
        const batoul = await Blog.deleteOne({ _id: req.params.ID });
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

const updatedblog = async (req, res) => {
    try {
        const batoul = await Blog.findByIdAndUpdate(req.params.ID, req.body);
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
    postblog, getblog, deletedblog, updatedblog,
};