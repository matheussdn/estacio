const express = require('express'); 
const router = express.Router(); 
const LivroDAO = require('../modelo/livro-dao'); 



router.get('/', async (req, res) => {
    try {
        const livros = await LivroDAO.obterLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao obter livros', erro: error.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const livro = req.body; 
        await LivroDAO.incluir(livro);
        res.status(201).json({ mensagem: 'Livro incluído com sucesso' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao incluir livro', erro: error.message });
    }
});


router.delete('/:_id', async (req, res) => {
    try {
        const { _id } = req.params; 
        await LivroDAO.excluir(_id);
        res.json({ mensagem: 'Livro excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir livro', erro: error.message });
    }
});

module.exports = router; 