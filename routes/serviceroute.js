const express = require('express');
const router = express.Router();

const servicecontroller = require('../controllers/serviceControl');

router.get('/helo', servicecontroller.getService);
router.post('/', servicecontroller.postService);
router.put('/update/:ID', servicecontroller.updateService);
router.delete('/delete/:ID', servicecontroller.deleteService);

module.exports = router;