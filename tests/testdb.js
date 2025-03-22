const mysql = require('mysql2');
require('dotenv').config();

// Create a connection to the database

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados:' + err);
    }else{
        db.query('SELECT * FROM categories', (err, rows) => {
            console.log(rows);
        });
        console.log('Conectado ao banco de dados com sucesso!');
    }
});

module.exports = db;