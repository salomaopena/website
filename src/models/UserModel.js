// Rota para registro de usuário
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query('INSERT INTO users (name, email, passwd) VALUES (?, ?, ?)', [name, email, hashedPassword], (err) => {
      if (err) return res.status(500).send('Erro ao registrar usuário.');
      res.redirect('/login');
    });
  });
  
  // Rota para login
  app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err || results.length === 0) return res.status(401).send('Usuário não encontrado.');
  
      const user = results[0];
      const validPassword = await bcrypt.compare(password, user.passwd);
      
      if (!validPassword) return res.status(401).send('Senha inválida.');
  
      req.session.user = { id: user.id, name: user.name, role: user.role };
      res.redirect('/dashboard');
    });
  });
  
  // Rota para logout
  app.get('/logout', (req, res) => {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  });
  
  // Rota protegida
  app.get('/dashboard', checkAuth, (req, res) => {
    res.render('dashboard', { user: req.session.user });
  });
  