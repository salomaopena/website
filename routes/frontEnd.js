const express = require('express')
const User = require('../models/newsModel');
//const userController = require('../contollers/user_controller');
//const authMiddleware = require('../middleware/authMiddleware');
const verificarSessao = require("../middlewares/authMiddleware");
const dotenv = require('dotenv');

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY

const router = express.Router();


router.get('/', (req, res) => res.render('index'));
router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register'));
router.get('/reset-password', (req, res) => res.render('reset-password'));
router.get('/admin', (req, res) => res.render('admin/index'));

router.get("/dashboard",verificarSessao,(req, res) => {
    if (!req.session.user) {
        return res.redirect("/login");
    }
    res.render("dashboard", { user: req.session.user });
});



router.get("/sessao", (req, res) => {
    if (req.session.user) {
        res.json({ status: "Sessão ativa", user: req.session.user });
    } else {
        res.json({ status: "Nenhum usuário na sessão" });
    }
});


module.exports = router;