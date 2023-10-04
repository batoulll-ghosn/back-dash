const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');


router.get('/', experienceController.getExperience);
router.post('/addExp', experienceController.addExperience);
router.put('/updateExp/:id', experienceController.updateExperience);
router.delete('/delete/:id', experienceController.deleteExperience);

module.exports = router;