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


const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use('/api/users', userRoutes);         
app.use('/api/posts', postRoutes);       
app.use('/api/comments', commentRoutes);  
app.use('/api/categories', categoryRoutes);
app.use('/api/tags', tagRoutes);            


sequelize.sync()
    .then(() => {
        console.log('Modelos sincronizados com o banco de dados!');
    })
    .catch((err) => {
        console.error('Erro ao sincronizar os modelos:', err.message);
    });

module.exports = app;


