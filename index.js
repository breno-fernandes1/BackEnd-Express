const sequelize = require('./src/config/database');
const User = require('./src/models/user');
const Post = require('./src/models/post');
const Comment = require('./src/models/comment');
const Category = require('./src/models/category');
const Tag = require('./src/models/tag');

// Relacionamentos
User.hasMany(Post); 
Post.belongsTo(User);

Post.hasMany(Comment); 
Comment.belongsTo(Post);

Category.hasMany(Post); 
Post.belongsTo(Category);

Post.belongsToMany(Tag, { through: 'PostTags' }); 
Tag.belongsToMany(Post, { through: 'PostTags' }); 

module.exports = { sequelize, User, Post, Comment, Category, Tag };
