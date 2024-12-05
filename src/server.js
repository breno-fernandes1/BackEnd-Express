const express = require('express');
const sequelize = require('./config/database');
const { User, Post, Comment, Category, Tag } = require('./models');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const tagRoutes = require('./routes/tagRoutes');

const app = express();
app.use(express.json());

// Relacionamentos
User.hasMany(Post); 
Post.belongsTo(User);

Post.hasMany(Comment); 
Comment.belongsTo(Post);

Category.hasMany(Post); 
Post.belongsTo(Category);

Post.belongsToMany(Tag, { through: 'PostTags' }); 
Tag.belongsToMany(Post, { through: 'PostTags' });

// Rotas CRUD
app.use('/api/users', userRoutes);       
app.use('/api/posts', postRoutes);    
app.use('/api/comments', commentRoutes);   
app.use('/api/categories', categoryRoutes); 
app.use('/api/tags', tagRoutes);         

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