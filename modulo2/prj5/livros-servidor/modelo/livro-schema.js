const mongoose = require('./conexao'); 


const LivroSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, 
    titulo: { type: String, required: true },
    codEditora: { type: Number, required: true },
    resumo: { type: String, required: true },
    autores: { type: [String], required: true } 
}, { collection: 'livros' }); 


const Livro = mongoose.model('Livro', LivroSchema);
module.exports = Livro;