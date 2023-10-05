//connect to the port 5000
const express = require('express');
const multer = require('multer');
const axios = require('axios');
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
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const apiKey = 'e3ebe65d99f70152cdf61f561a145ebd';
        const formData = new FormData()
        formData.append('key', apiKey)
        const image = req.file.buffer.toString('base64');
        formData.append('image', image)

        const response = await axios.post('https://api.imgbb.com/1/upload', formData);

        if (response.data.status === 200) {
            const imageUrl = response.data.data.url;
            console.log('Image uploaded successfully:', imageUrl);
            res.json({ imageUrl });
        } else {
            console.error('ImgBB API Error:', response.data.status_txt);
            res.status(500).json({ error: 'batoul--Error uploading the file' });
        }
    } catch (error) {
        console.error('Internal Server Error:', error);
        res.status(500).json({ error: 'Error uploading the file' });
    }
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});