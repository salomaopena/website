const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/dbconfig');
const nodemailer = require('nodemailer');


// Register
exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
        name,
        email,
        password: hashedPassword
    }
    db.query('INSERT INTO users SET ?', user, (err, result) => {
        if (err) {
            res.status(400).json({
                message: 'Failed to register user'
            });
        } else {
            res.status(201).json({
                message: 'User registered successfully'
            });
        }
    });
}