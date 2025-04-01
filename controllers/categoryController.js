const Category = require('../models/categoryModel');


const categoryController = {
    findAll: async (req, res) => {
        try {
            const categories = await Category.getAll();
            res.status(200).json({ status: 200, message: "success", categories: categories });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Erro ao buscar categorias ' + error });
        }
    },

    findById: async (req, res) => {
        try {
            const category = await Category.getById(req.params.id);
            category ? res.status(200).json({ status: 200, message: "Categoria encontrada", category: category }) :
                res.status(404).json({ status: 404, message: "Categoria não encontrado." });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Erro ao buscar categoria', error });
        }
    },

    createCategoty: async (req, res) => {
        try {
            const { name, slug } = req.body;
            const existeCategoria = await Category.getByName(name);
            if (existeCategoria) {
                return res.status(400).json({ status: 400, message: 'Categoria já cadastrada' });
            }
            const id = await Category.create(name, slug);
            res.status(200).json({ status: 200, message: 'Categoria criada com sucesso', id, name, slug });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Erro ao criar usuário ', error: error });
        }
    },

    updateCategory: async (req, res) => {
        try {
            const { name, slug} = req.body;
            const result = await Category.update(req.params.id, name, slug);
            if (result) {
                res.status(200).json({ status: 200, message: 'Categoria atualizada com sucesso' });
            } else {
                res.status(400).json({ status: 400, message: 'Categoria não encontrada ou nenhuma alteração feita' });
            }
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Erro ao atualizar a categoria ', error });
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const result = await Category.delete(req.params.id);
            if (result) {
                res.status(200).json({ status: 200, message: 'Categoria excluída com sucesso' });
            } else {
                res.status(400).json({ status: 400, message: 'Categoria não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Erro ao excluir categoria ', error });
        }
    }
};

module.exports = categoryController;