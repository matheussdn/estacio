import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../classes/controle/ControleEditora'; 
const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codEditora } = req.query;

  try {
    if (req.method === 'GET') {
      if (typeof codEditora === 'string') {
      
        const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));

        if (nomeEditora) {
          res.status(200).json({ nome: nomeEditora });
        } else {
          res.status(404).json({ message: 'Editora not found' });
        }
      } else {
        res.status(400).json({ message: 'Invalid codEditora parameter' });
      }
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};