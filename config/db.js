const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

pool.getConnection()
    .then(conn => {
        console.log({ message: "Conectado com o banco de dados...." })
        return conn.release();
    })
    .catch(err => {
        return console.error({ message: "Erro ao conectar com o banco de dados " + err });
    });


module.exports = pool