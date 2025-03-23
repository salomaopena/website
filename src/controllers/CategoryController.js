const db = require('../config/dbconfig');
const Category = require('../models/category');


exports.findAll = (req, res) => {
    Category.findAll((err, results) => {
        if (err) {
            return res.status(500).render('admin/categories/list_category', {
                title: 'Lista de categorias',
                message: 'Erro no servidor',
                error: err
            });
        }

        if (!results || results.length === 0) {
            return res.status(404).render('admin/categories/list_category',
                {
                    title: 'Lista de categorias',
                    message: 'Nenhuma categoria encontrada '
                });
        }

        return res.status(200).render('admin/categories/list_category', {
            title: 'Lista de categorias',
            categories: results,
            /*user: req.session.user*/
        }); // Enviar resposta com os dados
    });
};



// Criar uma nova categoria

exports.new = (req)

exports.add = (req, res) => {
    const { name, slug } = req.body;
    Category.add({ name, slug }, (err, result) => {
        if (err) {
            return res.status(500).render("admin/categories/new_category",
                {
                    title: 'Adicionar categoria',
                    message: 'Falha ao inserir a categoria no banco de dados: ' + err
                }
            );
        } else {
            res.status(200).render( "admin/categories/new_category",
                {
                    title: 'Adicionar categoria',
                    message: 'Categoria criada com sucesso!',
                    id: result.insertId
                }
            );
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