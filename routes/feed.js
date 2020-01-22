const express = require('express');
const router = express.Router();
const feedController = require('../controller/feed');
const { body } = require('express-validator');

router.get('/posts', feedController.getPosts);

router.post('/post',
    [body('content').trim().isLength({ min: 5 })],
    feedController.createPost);

router.put('/post', feedController.updatePost);
router.delete('/post', feedController.deletePost);

module.exports = router;