const db = require('../config/dbconfig');

// Obter a médias das avaliações de uma notícia

exports.getNewsRatingAverage = (req, res) => {
    const newsId = req.params.newsId;
    db.query('SELECT AVG(rating) AS average_rating FROM ratings WHERE news_id = ?', newsId, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Falha ao calcular a média das avaliações: ' + err
            });
        } else {
            res.json(result[0]);
        }
    });
}

// Adicionar uma nova avaliação

exports.addRating = (req, res) => {
    const { user_id, news_id, rating } = req.body;
    db.query('INSERT INTO ratings (user_id, news_id, rating) VALUES (?, ?, ?)', [user_id, news_id, rating], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Falha ao adicionar uma nova avaliação: ' + err
            });
        } else {
            res.status(200).json({
                message: 'Avaliação adicionada com sucesso!',
                id: result.insertId
            });
        }
    });
}