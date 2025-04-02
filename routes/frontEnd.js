const express = require('express')
const User = require('../models/newsModel');
//const userController = require('../contollers/user_controller');
//const authMiddleware = require('../middleware/authMiddleware');
const verificarSessao = require("../middlewares/authMiddleware");
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY
const API_URL = 'http://localhost:3000/api';

const router = express.Router();

// Criar instância do axios com a URL base da API
const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 5000,
});





router.get('/', (req, res) => res.render('index'));
router.get('/login', (req, res) => res.render('admin/auth/login'));
router.get('/register', (req, res) => res.render('admin/auth/register'));
router.get('/reset-password', (req, res) => res.render('reset-password'));

router.get("/admin", verificarSessao, (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login");
    }
    res.render("admin/dashboard", { user: req.session.user });
});


router.get('/categories',verificarSessao, async(req, res) => {
    try {
        const response =  await api.get('/categories'); // Faz requisição GET na API
        const categories = response.data.categories;; // 
        res.render('admin/categories/list',{categories:categories, title:"Categorias",user: req.session.user}); // Envia os  para o Handlebars
    } catch (error) {
        //res.render('admin/categories/list', { error: "Erro ao buscar usuários" });
        console.log("Erro ao buscar categoria: ",error)
    }
});


router.get("/category/new",verificarSessao, (req, res) => res.render('admin/categories/add'))
router.get("/category/update",verificarSessao, (req, res) => res.render('admin/categories/update'))
router.put("/categories/update/:id",verificarSessao, (req, res) => res.render('admin/categories/update'))
router.put("/categories/delete/:id",verificarSessao, (req, res) => res.render('admin/categories/list'))



router.get("/sessao", (req, res) => {
    if (req.session.user) {
        res.json({ status: "Sessão ativa", user: req.session.user });
    } else {
        res.json({ status: "Nenhum usuário na sessão" });
    }
});


module.exports = router;