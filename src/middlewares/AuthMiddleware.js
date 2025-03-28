// // Middleware para verificar se o usuário está autenticado
// const checkAuth = (req, res, next) => {
//     if (!req.session.user) {
//       return res.redirect('/login');
//     }
//     next();
//   };
  
//   // Middleware para verificar se o usuário é admin ou editor
//   const checkAdmin = (req, res, next) => {
//     if (!req.session.user || (req.session.user.role !== 'admin' && req.session.user.role !== 'editor')) {
//       return res.redirect('/dashboard');
//     }
//     next();
//   };
  
//   // Rota do Painel Administrativo
//   app.get('/admin', checkAuth, checkAdmin, (req, res) => {
//     res.render('admin', { user: req.session.user });
//   });
  
//   // Rota para gerenciar categorias
//   app.get('/admin/categories', checkAuth, checkAdmin, (req, res) => {
//     db.query('SELECT * FROM categories', (err, results) => {
//       if (err) return res.status(500).send('Erro ao buscar categorias.');
//       res.render('categories', { categories: results, user: req.session.user });
//     });
//   });
  
//   // Rota inicial
//   app.get('/', (req, res) => {
//     db.query('SELECT news.*, categories.name AS category FROM news INNER JOIN categories ON news.category_id = categories.id WHERE news.deleted_at IS NULL ORDER BY news.created_at DESC', (err, results) => {
//       if (err) return res.status(500).send('Erro ao buscar notícias.');
//       res.render('home', { title: 'Página Inicial', news: results });
//     });
//   });