
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');




router.post('/', UserController.createUser);
router.get('/:email', UserController.getUserByUsername);

module.exports = router;