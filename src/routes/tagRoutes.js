const express = require('express');
const { getTags, getTagById, createTag, updateTag, deleteTag } = require('../controllers/tagController');

const router = express.Router();

router.route('/')
    .get(getTags)
    .post(createTag);

router.route('/:id')
    .get(getTagById)
    .put(updateTag)
    .delete(deleteTag);

module.exports = router;
