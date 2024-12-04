const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');

const userRoutes = require('./routes/userRoutes');
// Importar outras rotas como postRoutes, commentRoutes, etc.

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
// Adicionar outras rotas como /api/posts, etc.

sequelize.sync()
    .then(() => console.log('Banco de dados sincronizado com sucesso'))
    .catch((err) => console.error('Erro ao sincronizar o banco de dados:', err));

module.exports = app;

