const express = require('express');
const router = express.Router();
const livroDAO = require('../modelo/livro-dao'); 


router.get('/', async (req, res) => {
    try {
        const livros = await livroDAO.obterLivros(); 
        res.json(livros); 
    } catch (err) {
        res.status(500).json({ message: 'Erro ao obter livros', error: err.message });
    }
});


router.post('/', async (req, res) => {
    const livro = req.body; 

    try {
        await livroDAO.incluir(livro); 
        res.json({ message: 'Livro incluído com sucesso!' }); 
    } catch (err) {
        res.status(500).json({ message: 'Erro ao incluir livro', error: err.message });
    }
});


router.delete('/:codigo', async (req, res) => {
    const codigo = req.params.codigo; 

    try {
        const result = await livroDAO.excluir(codigo); 
        if (result.deletedCount === 1) {
            res.json({ message: 'Livro excluído com sucesso!' }); 
        } else {
            res.status(404).json({ message: 'Livro não encontrado' }); 
        }
    } catch (err) {
        res.status(500).json({ message: 'Erro ao excluir livro', error: err.message });
    }
});


module.exports = router;