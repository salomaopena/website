const pool = require('../config/db');

const News = {

    getAll: async () => {
        const [rows] = await pool.query('SELECT n.id, n.title, n.slug, n.content, n.created_at, n.updated_at, c.name, u.first_name, u.last_name FROM news AS n, categories AS c, users AS u WHERE (u.id = n.author_id) AND (c.id = n.category_id) AND n.deleted_at IS NULL');
        return rows;
    },

    getById: async (id) => {
        const [rows] = await pool.query('SELECT n.id, n.title, n.slug, n.content, n.created_at, n.updated_at, c.name, u.first_name, u.last_name FROM news AS n, categories AS c, users AS u WHERE (u.id = n.author_id) AND (c.id = n.category_id) AND n.deleted_at IS NULL AND n.id = ?', [id]);
        return rows[0];
    },

    create: async (title,slug,content,category,author) => {
        const [result] = await pool.query('INSERT INTO news (title,slug,content,category_id,author_id) VALUES (?, ?, ?, ?, ?)', [title,slug,content,category,author]);
        return result.insertId;
    },

    update: async (id, title,slug,content,category,author) => {
        const [result] = await pool.query('UPDATE news SET title=?, slug=?, content=?, category_id=?, author_id=? WHERE id = ?', [title,slug,content,category,author, id]);
        return result.affectedRows
    },

    delete: async (id) => {
        const [result] = await pool.query('UPDATE news SET deleted_at = NOW() WHERE id = ?', [id]);
        return result.affectedRows;
    }

};

module.exports = News