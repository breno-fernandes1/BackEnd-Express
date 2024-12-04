const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');

// Importar as rotas
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const tagRoutes = require('./routes/tagRoutes');

// Inicializar o aplicativo
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api/users', userRoutes);          // Rotas de usuários
app.use('/api/posts', postRoutes);          // Rotas de posts
app.use('/api/comments', commentRoutes);    // Rotas de comentários
app.use('/api/categories', categoryRoutes); // Rotas de categorias
app.use('/api/tags', tagRoutes);            // Rotas de tags

// Sincronizar os modelos com o banco de dados
sequelize.sync()
    .then(() => {
        console.log('Modelos sincronizados com o banco de dados!');
    })
    .catch((err) => {
        console.error('Erro ao sincronizar os modelos:', err.message);
    });

module.exports = app;


