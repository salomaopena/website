const mysql = require('mysql2');
require('dotenv').config();

// Criar a conexão com o banco de dados

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'news_app',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//Conectar ao banco de dados

db.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados:' + err);
    }else{
        console.log('Conectado ao banco de dados com sucesso!');
    }
});

module.exports = db;