
const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profileController');

router.get('/:email', ProfileController.getUserByEmail);
router.post('/add-friend-request', ProfileController.addFriendRequest);
router.delete('/cancel-friend-request', ProfileController.cancelFriendRequest);
router.delete('/cancel-friendship', ProfileController.cancelFriendship);
router.post('/accept-friend-request', ProfileController.acceptFriendRequest);
router.get('/user-posts/:email', ProfileController.getUserPosts);

module.exports = router;