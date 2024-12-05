const { Post } = require('../models');

// GET: Obter todos os posts
const getPosts = async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
};

// GET: Obter um único post pelo ID
const getPostById = async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post não encontrado' });
    res.json(post);
};

// POST: Criar um novo post
const createPost = async (req, res) => {
    const { title, content, userId, categoryId } = req.body;
    const post = await Post.create({ title, content, userId, categoryId });
    res.json(post);
};

// PUT: Atualizar um post existente
const updatePost = async (req, res) => {
    const post = await Post.update(req.body, { where: { id: req.params.id } });
    res.json(post);
};

// DELETE: Excluir um post
const deletePost = async (req, res) => {
    await Post.destroy({ where: { id: req.params.id } });
    res.status(204).send();
};

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };
