const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const blogSchema = new Schema({
    blogtitle: { type: String, required: true },
    description: { type: String, required: true },
    blogimage: { type: String, required: true },
    imagedes: { type: String, required: true },
});
const Blog = model('Blog', blogSchema);
module.exports = Blog;