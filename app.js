// Importando módulos
const express = require('express');
const session = require("express-session");
const exphbs = require('express-handlebars');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require('node:path')
const dotenv = require('dotenv');
const api = require('./routes/api');
const admin = require('./routes/admin');
const defaultRoute = require('./routes/default');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // Alterar para `true` se usar HTTPS
        httpOnly: true,
        sameSite: "lax"  // Permite compartilhamento de cookies corretamente
    }
}));

app.use(cors({
    origin: process.env.BASE_URL + "/api",  // Ajuste conforme sua URL
    credentials: true  // Permite envio de cookies
}));

//definiar o handlebar como engine de layouts
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',  // Define "main" como o layout padrão
    layoutsDir: path.join(__dirname, 'views', 'layouts'), // Diretório dos layouts
}));
app.set('view engine', 'hbs');


// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());            // Para suportar JSON no body
app.use(express.urlencoded({ extended: true })); // Para suportar form-urlencoded
app.use(cookieParser());            // Middleware para habilitar cookies

// Rotas
app.use('/', defaultRoute);
app.use('/admin', admin);
app.use('/api', api);

// Servidor
app.listen(PORT, () => {
    console.info({
        api: 'API',
        author: 'Salomão Pena',
        status: 'Ligado',
        version: 'v 1.0.0',
        host: 'http://localhost:' + PORT,
    });
});
