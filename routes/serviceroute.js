const express = require('express');
const router = express.Router();

const servicecontroller = require('../controllers/serviceControl');

router.get('/getservice', servicecontroller.getService);
router.post('/postservice', servicecontroller.postService);
router.put('/update/:ID', servicecontroller.updateService);
router.delete('/delete/:ID', servicecontroller.deleteService);

module.exports = router;