const express = require('express');
const sequelize = require('./config/database'); // Configuração do Sequelize

const app = express();
app.use(express.json()); // Middleware para interpretar JSON

// Simulando um banco de dados em memória
let users = []; // Lista de usuários
let idCounter = 1; // Gerador de IDs para usuários

// Rotas CRUD para "users"

// 1. GET (Listar todos os usuários)
app.get('/api/users', (req, res) => {
    res.status(200).json(users);
});

// 2. GET (Buscar um usuário pelo ID)
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
});

// 3. POST (Criar um novo usuário)
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Nome e email são obrigatórios' });
    }
    const newUser = { id: idCounter++, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

// 4. PUT (Atualizar um usuário existente)
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    const { name, email } = req.body;
    user.name = name || user.name;
    user.email = email || user.email;
    res.status(200).json(user);
});

// 5. DELETE (Excluir um usuário pelo ID)
app.delete('/api/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    const deletedUser = users.splice(index, 1);
    res.status(200).json(deletedUser[0]);
});

// Inicializar o servidor
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão com o PostgreSQL estabelecida com sucesso!');
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    });
