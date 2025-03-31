const pool = require('../config/db');

const Category = {

    getAll: async () => {
        const [rows] = await pool.query('SELECT * FROM categories WHERE deleted_at IS NULL');
        return rows;
    },

    getById: async (id) => {
        const [rows] = await pool.query('SELECT * FROM categories WHERE deleted_at IS NULL AND id = ?', [id]);
        return rows[0];
    },

    getByName: async (name) => {
        const [rows] = await pool.query('SELECT * FROM categories WHERE deleted_at IS NULL AND name = ?', [name]);
        return rows[0];
    },

    create: async (name, slug) => {
        const [result] = await pool.query('INSERT INTO categories (name, slug) VALUES (?, ?)', [name, slug]);
        return result.insertId;
    },

    update: async (id, name, slug) => {
        const [result] = await pool.query('UPDATE categories SET name = ?, slug = ? WHERE id = ?', [name, slug, id]);
        return result.affectedRows
    },

    delete: async (id) => {
        const [result] = await pool.query('UPDATE categories SET deleted_at = NOW() WHERE id = ?', [id]);
        return result.affectedRows;
    }

};

module.exports = Category