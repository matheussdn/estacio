const mongoose = require('mongoose');

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};


const mongoURI = 'mongodb://localhost:27017/livraria';

mongoose.connect(mongoURI, options)
    .then(() => console.log('Conectado ao MongoDB com sucesso!'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = mongoose;