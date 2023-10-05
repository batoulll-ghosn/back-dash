const express = require('express');
const router = express.Router();

const controller = require('../controllers/contactcontrol');



router.get('/getcontact', controller.getContact);
router.post('/postcontact', controller.postContact);
router.put('/update/:ID', controller.updateContact);
router.delete('/delete/:ID', controller.deleteContact);

module.exports = router;
