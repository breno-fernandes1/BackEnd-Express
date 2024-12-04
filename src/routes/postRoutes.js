const express = require('express');
const { getPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/postController');

const router = express.Router();

router.route('/')
    .get(getPosts)       // Obter todos os posts
    .post(createPost);   // Criar um novo post

router.route('/:id')
    .get(getPostById)    // Obter um post específico pelo ID
    .put(updatePost)     // Atualizar um post existente
    .delete(deletePost); // Excluir um post

module.exports = router;
