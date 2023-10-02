//connect to the port 5000
const express = require('express');
// Install dotenv package, to avoid putting secret key inside my code
require('dotenv').config();
const app = express();
const connectDB = require('./database/db');
const bodyParser = require('body-parser');
const data = require('./routes/route');
const Hero = require('./routes/heroRoute');
const Foot = require('./routes/footRoute');
const cors = require('cors');
const PORT = 5000
app.use(bodyParser.json());
app.use(cors());

app.use('/batoul', data);
app.use('/Hero', Hero);
app.use('/Foot', Foot);
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});





