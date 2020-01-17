const express = require('express');
const router = express.Router();
const commentController = require('../controller/comment');

router.get('/comments', commentController.getComments);
router.post('/comment', commentController.createComments);
router.put('/comment', commentController.updateComment);
router.delete('comment', commentController.deleteComment);

module.exports = router;