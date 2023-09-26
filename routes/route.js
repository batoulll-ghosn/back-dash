const express = require('express');
const router = express.Router();

const controller = require('../controllers/control');

router.get('/helo', controller.get);
router.post('/', controller.post);
router.put('/update/:ID', controller.updatedata);
router.delete('/delete/:ID', controller.deletedata);

module.exports = router;
