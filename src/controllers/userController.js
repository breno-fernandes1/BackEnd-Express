const { User } = require('../..');

// GET: Obter todos os usuários
const getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

// GET: Obter um único usuário pelo ID
const getUserById = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json(user);
};

// POST: Criar um novo usuário
const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.json(user);
};

// PUT: Atualizar um usuário existente
const updateUser = async (req, res) => {
    const user = await User.update(req.body, { where: { id: req.params.id } });
    res.json(user);
};

// DELETE: Excluir um usuário
const deleteUser = async (req, res) => {
    await User.destroy({ where: { id: req.params.id } });
    res.status(204).send();
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
