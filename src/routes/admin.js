const express = require('express');
const db = require('../config/dbconfig');
const app = express();
const router = express.Router();
const categoryController = require('../controllers/categoryController');

app.use(express.json())

router.get("/", (req, res) => {
    res.render("admin/index")
});


//Configuração de rotas para categorias


//Rota para gerenciar categorias

router.get('/category/list', categoryController.findAll);
router.get("/category/new",categoryController.new);
router.post("/category/add",categoryController.add);
router.get("/category/update/:id",categoryController.update);
router.post("/category/edit",categoryController.edit);







  
// // Excluir notícia
// ro.delete('/news/delete/:id', checkAuth, checkAdmin, (req, res) => {
//     db.query('UPDATE news SET deleted_at = NOW() WHERE id = ?', [req.params.id], (err) => {
//       if (err) return res.status(500).json({ success: false, message: "Erro ao excluir notícia." });
//       res.json({ success: true, message: "Notícia excluída com sucesso!" });
//     });
//   });
  
//   // Atualizar notícia
//   app.put('/news/update/:id', checkAuth, checkAdmin, (req, res) => {
//     const { title, slug, content, category_id, image } = req.body;
//     db.query('UPDATE news SET title = ?, slug = ?, content = ?, category_id = ?, image = ? WHERE id = ?',
//       [title, slug, content, category_id, image, req.params.id],
//       (err) => {
//         if (err) return res.status(500).json({ success: false, message: "Erro ao atualizar notícia." });
//         res.json({ success: true, message: "Notícia atualizada com sucesso!" });
//       });
//   });

module.exports = router;