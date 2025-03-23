const express = require('express');
const db = require('../config/dbconfig');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get("/", (req, res) => {
    res.render("admin/index")
});


//Configuração de rotas para categorias


//Rota para gerenciar categorias

router.get('/category/list', categoryController.findAll);

router.get("/category/new",categoryController.add);

module.exports = router;