const { Category } = require('../models');

// GET: Obter todas as categorias
const getCategories = async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
};

// GET: Obter uma única categoria pelo ID
const getCategoryById = async (req, res) => {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: 'Categoria não encontrada' });
    res.json(category);
};

// POST: Criar uma nova categoria
const createCategory = async (req, res) => {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.json(category);
};

// PUT: Atualizar uma categoria existente
const updateCategory = async (req, res) => {
    const category = await Category.update(req.body, { where: { id: req.params.id } });
    res.json(category);
};

// DELETE: Excluir uma categoria
const deleteCategory = async (req, res) => {
    await Category.destroy({ where: { id: req.params.id } });
    res.status(204).send();
};

module.exports = { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
