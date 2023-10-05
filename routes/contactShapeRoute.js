const express = require('express');
const router = express.Router();

const controller = require('../controllers/contactShape');



router.get('/getContactShape', controller.getshape);
router.post('/postContactShape', controller.postshape);
router.put('/update/:ID', controller.updatedshape);
router.delete('/delete/:ID', controller.deletedshape);

module.exports = router;
