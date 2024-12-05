const { Tag } = require('../models');

// GET: Obter todas as tags
const getTags = async (req, res) => {
    const tags = await Tag.findAll();
    res.json(tags);
};

// GET: Obter uma única tag pelo ID
const getTagById = async (req, res) => {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) return res.status(404).json({ message: 'Tag não encontrada' });
    res.json(tag);
};

// POST: Criar uma nova tag
const createTag = async (req, res) => {
    const { name } = req.body;
    const tag = await Tag.create({ name });
    res.json(tag);
};

// PUT: Atualizar uma tag existente
const updateTag = async (req, res) => {
    const tag = await Tag.update(req.body, { where: { id: req.params.id } });
    res.json(tag);
};

// DELETE: Excluir uma tag
const deleteTag = async (req, res) => {
    await Tag.destroy({ where: { id: req.params.id } });
    res.status(204).send();
};

module.exports = { getTags, getTagById, createTag, updateTag, deleteTag };
