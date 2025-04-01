// routes/userRoutes.js
const express = require('express')
const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController');
const newsController = require('../controllers/newsController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


//Rotas para utilizadores
router.post('/register', userController.createUser);
router.post('/login',userController.login);

router.get('/', userController.findAllUsers);
router.get('/user/:id', userController.findUserById);
router.put('/update/:id', userController.updateUser);
router.put('/change-password', authMiddleware, userController.changePassword);
router.put('/reset-password', userController.resetPassword);
router.post('/reset-password-request', userController.resetPasswordRequest);
router.put('/delete/:id', userController.deleteUser);
router.get("/logout", userController.logout);

//Rotas para a categoria 
router.get('/categories',categoryController.findAll);
router.get('/categories/:id',categoryController.findById);
router.post('/categories/add',categoryController.createCategoty);
router.put('/categories/update/:id',categoryController.updateCategory);
router.put('/categories/delete/:id',categoryController.deleteCategory);


//Rotas para as notícias
router.get('/news',newsController.findAll);
router.get('/news/:id',newsController.findById);
router.post('/news/add',newsController.createNews);
router.put('/news/update/:id',newsController.updateNews);
router.put('/news/delete/:id',newsController.deleteNews);


module.exports = router;