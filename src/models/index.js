const sequelize = require('../config/database'); 
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const Category = require('./category');
const Tag = require('./tag');

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
