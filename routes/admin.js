const express = require('express')
const verificarSessao = require("../middlewares/authMiddleware");
const axios = require('axios');


const API_URL = 'http://localhost:3000/api';

const router = express.Router();

// Criar instância do axios com a URL base da API
const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 5000,
});


router.get("/", verificarSessao, (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login");
    }
    res.render("admin/dashboard", { user: req.session.user });
});


/**CATEGORIES ROUTES */

router.get('/categories', verificarSessao, async (req, res) => {
    try {
        const response = await api.get('/categories'); // Faz requisição GET na API
        const categories = response.data.categories;; // 
        res.render('admin/categories/list', { categories: categories, title: "Categorias", user: req.session.user }); // Envia os  para o Handlebars
    } catch (error) {
        //res.render('admin/categories/list', { error: "Erro ao buscar usuários" });
        console.log("Erro ao buscar categoria: ", error)
    }
});


router.post("/categories/add", verificarSessao, async(req, res) => {
    try {
        const { name, slug } = req.body;
        const response = await api.post("/categories/add", { name, slug});
        res.status(201).json({ success: true, message: "Categoria adicionada com sucesso!" });
    } catch (error) {
        console.error("Erro ao adicionar categoria:", error);
        res.status(500).json({ success: false, message: "Erro ao adicionar categoria." });
    }
})


router.put("/categories/update/:id", verificarSessao, async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug } = req.body;

        const response = await api.put(`/categories/update/${id}`, {name, slug });

        res.status(200).json({ success: true, message: "Categoria atualizado com sucesso!" });
    } catch (error) {
        console.error("Erro ao atualizar categoria:", error);
        res.status(500).json({ success: false, message: "Erro ao atualizar categoria." });
    }
});


router.put("/categories/delete/:id", verificarSessao, async (req, res) => {
    const { id } = req.params;
    try {
        await api.put(`/categories/delete/${id}`);// Soft delete
        res.status(200).json({ success: true, message: "Categoria excluída com sucesso!" }); // Redireciona para a página de listagem
    } catch (error) {
        console.error("Erro ao excluir usuário:", error); // Log para depuração
        res.status(500).json({ success: false, message: "Erro ao excluir usuário." });
    }
})


router.get("/news", verificarSessao, (req, res) => {
    res.render('admin/news/list', { user: req.session.user, title: 'Nova Notítica' })
})









router.get("/sessao", (req, res) => {
    if (req.session.user) {
        res.json({ status: "Sessão ativa", user: req.session.user });
    } else {
        res.json({ status: "Nenhum usuário na sessão" });
    }
});


module.exports = router;