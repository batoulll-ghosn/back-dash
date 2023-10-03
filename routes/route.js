const express = require('express');
const router = express.Router();

const controller = require('../controllers/control');



router.get('/helo', controller.getb);
router.post('/', controller.postb);
router.put('/update/:ID', controller.updatedatab);
router.delete('/delete/:ID', controller.deletedatab);

module.exports = router;
