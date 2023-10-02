const express = require('express');
const router = express.Router();
const heroControl = require('../controllers/heroControl');


router.get('/Hero', heroControl.getHero);
router.post('/addHero', heroControl.addHero);
router.put('/update/:_id', heroControl.updateHero);
router.delete('/delete/:id', heroControl.deleteHero);

module.exports = router;