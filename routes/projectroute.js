const express = require('express');
const router = express.Router();

const controller = require('../controllers/projectcontrol');

router.get('/getproject', controller.getproject);
router.post('/postproject', controller.postproject);
router.put('/update/:ID', controller.updateproject);
router.delete('/delete/:ID', controller.deleteproject);

module.exports = router;