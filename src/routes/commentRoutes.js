const express = require('express');
const { getComments, getCommentById, createComment, updateComment, deleteComment } = require('../controllers/commentController');

const router = express.Router();

router.route('/')
    .get(getComments)
    .post(createComment);

router.route('/:id')
    .get(getCommentById)
    .put(updateComment)
    .delete(deleteComment);

module.exports = router;
