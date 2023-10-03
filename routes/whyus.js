const express = require('express');
const router = express.Router();
const controllerwhyus = require('../controllers/controlwhyus');
router.get('/kel', controllerwhyus.getw);
router.post('/', controllerwhyus.postw);
router.put('/update/:ID', controllerwhyus.updatedataw);
router.delete('/delete/:ID', controllerwhyus.deletedataw);
module.exports = router;