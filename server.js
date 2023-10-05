//connect to the port 5000
const express = require('express');
// Install dotenv package, to avoid putting secret key inside my code
require('dotenv').config();
const app = express();
const connectDB = require('./database/db');
const bodyParser = require('body-parser');
const data = require('./routes/route');
const datawhy = require('./routes/whyus');
const dataroute = require('./routes/serviceroute');
const dataContact = require('./routes/contactroute');
const dataContactShape = require('./routes/contactShapeRoute');
const dataBlog = require('./routes/blogroute');
const dataProject = require('./routes/projectroute');
const dataHero = require('./routes/heroroute');
const dataFooter = require('./routes/footerroute');
const cors = require('cors');
const PORT = 5000
app.use(bodyParser.json());
app.use(cors());
app.use('/', data);
app.use('/whyus', datawhy);
app.use('/service', dataroute);
app.use('/contact', dataContact);
app.use('/contactShape', dataContactShape);
app.use('/blog', dataBlog);
app.use('/project', dataProject);
app.use('/hero', dataHero);
app.use('/footer', dataFooter);
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});