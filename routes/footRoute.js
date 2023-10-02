const express = require('express');
const router = express.Router();
const footControl = require('../controllers/footControl');


router.get('/foot', footControl.getFoot);
router.post('/addfoot', footControl.addFoot);
router.put('/update/:_id', footControl.updateFoot);
router.delete('/delete/:id', footControl.deleteFoot);

module.exports = router;