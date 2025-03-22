const db = require('../config/dbconfig');

exports.list = (callback) => {
    db.query('SELECT * FROM categories WHERE deleted_at IS NULL', callback);
};

exports.getById = (id, callback)=>{
    db.query('SELECT * FROM categories WHERE deleted_at IS NULL AND id = ?', [id], callback);
};

exports.add = ({ name, slug }, callback)=>{
    return db.query('INSERT INTO categories (name, slug) VALUES (?, ?)', [name, slug], callback);
};

exports.update = (id, { name, slug }, callback) =>{
    return db.query('UPDATE categories SET name = ?, slug = ? WHERE id = ?', [name, slug, id], callback);
};


exports.delete = (id, callback) =>{
    db.query('UPDATE categories SET deleted_at = NOW() WHERE id = ?', [id], callback);
};


