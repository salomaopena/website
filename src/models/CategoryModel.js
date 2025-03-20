const db = require('../config/dbconfig');

class Category{
    static async list(){
       return db.query('SELECT * FROM categories WHERE deleted_at IS NULL');
    }
    
    static async getById(id){
        return db.query('SELECT * FROM categories WHERE deleted_at IS NULL AND id = ?', [id] )
    }

    static async add({name, slug}){
        return db.query('INSERT INTO categories (name) VALUES (?)', [name, slug]);
    }
    
    static async updateCategory(id, {name, slug}){
        return db.query('UPDATE categories SET name = ? WHERE id = ?', [name, slug, id]);
    }
    
    
    static delete(id){
        db.query('UPDATE categories SET deleted_at = NOW() WHERE id = ?', [id]);
    }
}

module.exports = Category;