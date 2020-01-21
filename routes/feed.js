const express = require('express');
const router = express.Router();
const feedController = require('../controller/feed');
<<<<<<< HEAD

router.get('/posts',feedController.getPosts);
router.post('/post',feedController.createPost);
router.put('/post',feedController.updatePost);
router.delete('/post',feedController.deletePost);
=======
const { body } = require('express-validator/check')

router.get('/posts', feedController.getPosts);

router.post('/post',
    [body('content').trim().isLength({ min: 5 })],
    feedController.createPost);

router.put('/post', feedController.updatePost);
router.delete('/post', feedController.deletePost);
>>>>>>> 4887e5838e28c18c56da18d4dcccb997ebbfcc3c

module.exports = router;