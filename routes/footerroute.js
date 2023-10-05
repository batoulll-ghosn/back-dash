const express = require('express');
const router = express.Router();

const controller = require('../controllers/footer');



router.get('/getfooter', controller.getw);
router.post('/postfooter', controller.postfooter);
router.put('/update/:ID', controller.updatedataw);
router.delete('/delete/:ID', controller.deletedataw);

module.exports = router;