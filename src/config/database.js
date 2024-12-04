const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DATABASE_NAME, // Nome do banco
    process.env.DATABASE_USER, // Usuário do banco
    process.env.DATABASE_PASSWORD, // Senha do banco
    {
        host: process.env.DATABASE_HOST, // Host do banco
        port: process.env.DATABASE_PORT, // Porta do banco
        dialect: 'postgres', // Dialeto usado (PostgreSQL)
        dialectOptions: {
            ssl: {
                require: true, // SSL obrigatório
                rejectUnauthorized: false, // Aceitar certificados autoassinados
            },
        },
    }
);

module.exports = sequelize;
