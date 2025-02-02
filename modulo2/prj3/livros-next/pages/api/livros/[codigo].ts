import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../classes/controle/ControleLivros'; 

const controleLivros = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codigo } = req.query;

  try {
    if (req.method === 'DELETE') {
      if (typeof codigo === 'string') {
    
        const livroDeleted = controleLivros.excluir(Number(codigo));

        if (livroDeleted) {
          res.status(200).json({ message: 'Livro excluído com sucesso' });
        } else {
          res.status(404).json({ message: 'Livro não encontrado' });
        }
      } else {
        res.status(400).json({ message: 'Invalid codigo parameter' });
      }
    } else {
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};