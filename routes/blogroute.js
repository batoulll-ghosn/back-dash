const express = require('express');
const router = express.Router();

const controller = require('../controllers/blogcontrol');



router.get('/getblog', controller.getblog);
router.post('/postblog', controller.postblog);
router.put('/update/:ID', controller.updatedblog);
router.delete('/delete/:ID', controller.deletedblog);

module.exports = router;
