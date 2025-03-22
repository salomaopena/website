// importar modulos
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser")
const { engine } = require('express-handlebars');


// Importar rotas
const categoryRoutes = require('./routes/routes');
const commentRoutes = require('./routes/routes');
const ratingRoutes = require('./routes/routes');

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//definiar o handlebar como engine de layouts
app.engine('handlebars', engine({
    defaultLayout: 'main',  // Define "main" como o layout padrão
    layoutsDir: path.join(__dirname, 'views', 'layouts'), // Diretório dos layouts
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));



// Configurar o express para servir os arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

//rota para a página principal
app.use('/category', categoryRoutes);
app.use('/comments', commentRoutes);
app.use('/ratings', ratingRoutes);

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