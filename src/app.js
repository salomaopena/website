// importar modulos
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser")
const session = require('express-session');
const bcrypt = require('bcryptjs');
const { engine } = require('express-handlebars');
const admin = require("./routes/admin")


// Importar rotas
const categoryRoutes = require('./routes/routes');
const commentRoutes = require('./routes/routes');
const ratingRoutes = require('./routes/routes');

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())


//definiar o handlebar como engine de layouts
app.engine('handlebars', engine({
    defaultLayout: 'main',  // Define "main" como o layout padrão
    layoutsDir: path.join(__dirname, 'views', 'layouts'), // Diretório dos layouts
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));



// Configurar o express para servir os arquivos estáticos da pasta public middleware
app.use(express.static(path.join(__dirname, 'public')));


// Configuração da Sessão
app.use(session({
    secret: 'MinhaChave',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 60000 * 60 } // 1 hora
  }));
  
  // Middleware para verificar se o usuário está autenticado
  const checkAuth = (req, res, next) => {
    if (!req.session.user) {
      return res.redirect('/login');
    }
    next();
  };

//condifurações de rotas
app.use('/admin',admin);


//rota para a página de notícias

app.get('/', (req, res) => {
    res.render('index', {
        currentDate: new Date(),
    });
});




//servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`);
});