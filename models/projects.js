const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const projectsSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    projectimage1: { type: String, required: true },
    link1: { type: String, required: true },
    projectimage2: { type: String, required: true },
    link2: { type: String, required: true }
});
const Project = model('Project', projectsSchema);
module.exports = Project;