const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.get('/', user.getUser);
router.post('/', user.user)
router.post('/login', user.login);
module.exports = router;
