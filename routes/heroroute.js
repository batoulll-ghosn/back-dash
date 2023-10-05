const express = require('express');
const router = express.Router();

const controller = require('../controllers/hero');



router.get('/gethero', controller.gethero);
router.post('/posthero', controller.posthero);
router.put('/update/:ID', controller.updatehero);
router.delete('/delete/:ID', controller.deletehero);

module.exports = router;