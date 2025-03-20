const db = require('../config/dbconfig');


// Listar todos os comentários de uma notícia específica

exports.listAllCommentsByNews = (req, res) => {
    const newsId = req.params.newsId;
    db.query('SELECT * FROM comments WHERE news_id = ?', newsId, (err, result) => {
        if (err) {
            return res.status(500).json({
                 message: 'Falha ao listar todos os comentários da notícia ' + err
            });
        } else {
            res.status(200).json(result);
        }
    });
}


// Criar um novo comentário

exports.createComment = (req, res) => {
    const { user_id, news_id, comment } = req.body;
    db.query('INSERT INTO comments (user_id, news_id, comment) VALUES (?, ?, ?)', [user_id, news_id, comment], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Falha ao criar comentário ' + err
            });
        } else {
            res.status(201).json({
                message: 'Comentário criado com sucesso',
                id: result.insertId
            });
        }
    });
}


// Excluir um comentário através do deleted_at

exports.deleteComment = (req, res) => {
    const commentId = req.params.commentId;
    db.query('UPDATE comments SET deleted_at = NOW() WHERE id = ?', commentId, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Falha ao excluir comentário ' + err
            });
        } else {
            res.status(200).json({
                message: 'Comentário excluído com sucesso',
                result: result
            });
        }
    });
}



