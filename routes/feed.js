const express = require('express');
const router = express.Router();
const feedController = require('../controller/feed');

router.get('/posts',feedController.getPosts);
router.post('/post',feedController.createPost);
router.put('/post',feedController.updatePost);
router.delete('/post',feedController.deletePost);

module.exports = router;