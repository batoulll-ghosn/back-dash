const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://batoulghosn:b57j7W8OaCyI7Rpt@cluster0.pdsccp0.mongodb.net/project_three', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connectToDatabase = async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://batoulghosn:b57j7W8OaCyI7Rpt@cluster0.pdsccp0.mongodb.net/project_three', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}


module.exports = connectToDatabase;