const db = require('../config/dbconfig');

class Category{

static findAll(callback){
    db.query('SELECT * FROM categories WHERE deleted_at IS NULL', callback);
};

static findById(id, callback){
    db.query('SELECT * FROM categories WHERE deleted_at IS NULL AND id = ?', [id], callback);
};

static add({ name, slug }, callback){
    return db.query('INSERT INTO categories (name, slug) VALUES (?, ?)', [name, slug], callback);
};

static update(id, { name, slug }, callback){
    return db.query('UPDATE categories SET name = ?, slug = ? WHERE id = ?', [name, slug, id], callback);
};


static delete(id, callback){
    db.query('UPDATE categories SET deleted_at = NOW() WHERE id = ?', [id], callback);
};

}

module.exports = Category
