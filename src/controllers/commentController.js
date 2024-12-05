const { Comment } = require('../..');

// GET: Obter todos os comentários
const getComments = async (req, res) => {
    const comments = await Comment.findAll();
    res.json(comments);
};

// GET: Obter um único comentário pelo ID
const getCommentById = async (req, res) => {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ message: 'Comentário não encontrado' });
    res.json(comment);
};

// POST: Criar um novo comentário
const createComment = async (req, res) => {
    const { content, postId, userId } = req.body;
    const comment = await Comment.create({ content, postId, userId });
    res.json(comment);
};

// PUT: Atualizar um comentário existente
const updateComment = async (req, res) => {
    const comment = await Comment.update(req.body, { where: { id: req.params.id } });
    res.json(comment);
};

// DELETE: Excluir um comentário
const deleteComment = async (req, res) => {
    await Comment.destroy({ where: { id: req.params.id } });
    res.status(204).send();
};

module.exports = { getComments, getCommentById, createComment, updateComment, deleteComment };
