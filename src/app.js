

// importar modulos
//app.js
const express = require('express');
const app = express();
const path = require('path');


// Importar rotas
const categoryRoutes = require('./routes/Routes');
const commentRoutes = require('./routes/Routes');
const ratingRoutes = require('./routes/Routes');



app.use(express.json());
const port = process.env.PORT || 3000;

// Configurar o express para usar o EJS como view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Configurar o express para servir os arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public','assets')));

//rota para a página principal
app.use('/category', categoryRoutes);
app.use('/comments', commentRoutes);
app.use('/ratings', ratingRoutes);

//rota para a página de notícias

// app.get('/', (req, res) => {
//     res.render('index', {
//         title: 'News App',
//         message: 'Welcome to the News App!'
//     });
// });



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});