const Livro = require('./livro-schema'); 


const obterLivros = async () => {
    try {
     
        return await Livro.find();
    } catch (err) {
        console.error('Erro ao obter livros:', err);
        throw err;
    }
};


const incluir = async (livro) => {
    try {
    
        const novoLivro = new Livro(livro);
        return await novoLivro.save();
    } catch (err) {
        console.error('Erro ao incluir livro:', err);
        throw err;
    }
};


const excluir = async (codigo) => {
    try {

        return await Livro.deleteOne({ _id: codigo });
    } catch (err) {
        console.error('Erro ao excluir livro:', err);
        throw err;
    }
};


module.exports = { obterLivros, incluir, excluir };