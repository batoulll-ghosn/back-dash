const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.get('/', user.getUser);
router.post('/adduser', user.user)

module.exports = router;
