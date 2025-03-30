// routes/userRoutes.js
const express = require('express')
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


router.post('/register', userController.createUser);
router.post('/login',userController.login);
//router.get('/', authMiddleware, userController.getAllUsers);
router.get('/', userController.findAllUsers);
//router.get('/:id', authMiddleware, userController.findUserById);
router.get('/:id', userController.findUserById);
//router.put('/:id', authMiddleware, userController.updateUser);
router.put('/update/:id', userController.updateUser);
router.put('/change-password', authMiddleware, userController.changePassword);
router.put('/reset-password', userController.resetPassword);
router.post('/reset-password-request', userController.resetPasswordRequest);
//router.delete('/:id', authMiddleware, userController.deleteUser);
router.put('/delete/:id', userController.deleteUser);
router.get("/logout", userController.logout);




module.exports = router;