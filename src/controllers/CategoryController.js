const db = require('../config/dbconfig');

// Listar todas as categorias

exports.list = (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) {
            return res.status(500).json({
                message: 'Falha ao obter as categorias do banco de dados: ' + err
            });
        } else {
            res.json(results);
        }
    });
};



// Criar uma nova categoria

exports.add = (req, res) => {
    const { name, slug} = req.body;
    db.query('INSERT INTO categories (name, slug) VALUES (?, ?)', [ name, slug ], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Falha ao inserir a categoria no banco de dados: ' + err
            });
        } else {
            res.status(200).json({
                message: 'Categoria criada com sucesso!',
                id: result.insertId
            });
        }
    });
};


// Atualizar uma categoria

exports.update = (req, res) => {
    const id = req.params.id;
    const { name, slug } = req.body;
    db.query('UPDATE categories SET name = ?, slug = ? WHERE id = ?', [name, slug, id], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Falha ao atualizar a categoria no banco de dados: ' + err
            });
        } else {
            res.status(200).json({
                message: 'Categoria atualizada com sucesso!',
                result: result
            });
        }
    });
}


// Excluir uma categoria

exports.delete = (req, res) => {
    const id = req.params.id;
    const deleted_at = new Date();
    db.query('UPDATE categories SET deleted_at = ? WHERE id = ?', [deleted_at, id], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Falha ao deletar a categoria do banco de dados: ' + err
            });
        } else {
            res.status(200).json({
                message: 'Categoria deletada com sucesso!',
                result: result
            });
        }
    });
};