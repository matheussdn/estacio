import { Livro } from "livro";


const baseURL = "http://localhost:3030/livros";


interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

export class ControleLivros {


  async obterLivros(): Promise<Livro[]> {
    try {
      const response = await fetch(baseURL);
      const livrosMongo: LivroMongo[] = await response.json();

      return livrosMongo.map(livro => new Livro(
        livro._id || "", 
        livro.codEditora,
        livro.titulo,
        livro.resumo,
        livro.autores
      ));
    } catch (error) {
      console.error('Erro ao obter livros:', error);
      return [];
    }
  }

 
  async excluir(codigo: string): Promise<boolean> {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      return result.ok; 
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
      return false;
    }
  }


  async incluir(livro: Livro): Promise<boolean> {
    try {
      const livroMongo: LivroMongo = {
        _id: null,
        codEditora: livro.codEditora,
        titulo: livro.titulo,
        resumo: livro.resumo,
        autores: livro.autores,
      };

      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livroMongo),
      });

      const result = await response.json();
      return result.ok; 
    } catch (error) {
      console.error('Erro ao incluir livro:', error);
      return false;
    }
  }
}