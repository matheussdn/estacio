import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../classes/controle/ControleLivros'; 

const controleLivros = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
    
      const livros = controleLivros.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
     
      const { titulo, resumo, autores, codEditora } = req.body;
      
      if (!titulo || !resumo || !autores || !codEditora) {
        res.status(400).json({ message: 'All fields are required' });
        return;
      }

     
      const livro = { codigo: 0, titulo, resumo, autores, codEditora }; 
      controleLivros.incluir(livro);

      res.status(200).json({ message: 'Livro adicionado com sucesso' });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};