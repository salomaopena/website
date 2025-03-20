const express = require('express');
const router = express.Router();

// Importar controllers
const categoryController = require('../controllers/CategoryController');
const commentController = require('../controllers/CommentController');
const ratingController = require('../controllers/RatingController');

//Importar o middleware de autenticação
const authMiddleware = require('../middlewares/AuthMiddleware');


// Rotas para categorias
router.get('/list', categoryController.list);
router.post('/add', /*authMiddleware,*/ categoryController.add);
//router.get('/categories/:categoryId', categoryController.getCategoryById);
//router.put('/categories/:categoryId', categoryController.updateCategory);
router.delete('/delete/:categoryId', categoryController.delete);


// Rotas para comentários

//router.get('/comments', commentController.listAllComments);
//router.post('/comments', authMiddleware, commentController.createComment);
//router.get('/comments/:commentId', commentController.getCommentById);
//router.put('/comments/:commentId', commentController.updateComment);
router.delete('/comments/:commentId', commentController.deleteComment);


// Rotas para avaliações
//router.get('/news/:newsId/ratings/average', ratingController.getNewsRatingAverage);
//router.post('/news/:newsId/ratings', authMiddleware, ratingController.addRating);


module.exports = router;