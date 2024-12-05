const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hbguhpcc', 'hbguhpcc', 'M5NH2NkREN51rIifZzwAwe-MlqXnqzUB', {
    host: 'baasu.db.elephantsql.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

module.exports = sequelize;
