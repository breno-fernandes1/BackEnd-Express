const express = require('express');
const sequelize = require('./config/database'); // Importar configuração do banco

const app = express();

// Testar a conexão com o banco e sincronizar modelos
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão com o PostgreSQL estabelecida com sucesso!');
        return sequelize.sync(); // Sincronizar os modelos com o banco
    })
    .then(() => {
        console.log('Modelos sincronizados com o banco de dados!');
        // Inicializar o servidor após a sincronização
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Erro ao conectar ou sincronizar com o banco:', err.message);
        process.exit(1); // Encerra o processo em caso de erro
    });
