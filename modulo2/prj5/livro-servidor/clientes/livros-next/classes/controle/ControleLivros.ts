const baseURL = "/api/livros"; // Ajuste para API interna do Next.js

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
      const resposta = await fetch(baseURL, { method: "GET" });
      if (!resposta.ok) throw new Error("Erro ao obter os livros");
      
      const dados: LivroMongo[] = await resposta.json();
      return dados.map(livro => new Livro(
        livro._id ?? "",
        livro.codEditora,
        livro.titulo,
        livro.resumo,
        livro.autores
      ));
    } catch (erro) {
      console.error(erro);
      return [];
    }
  }

  async excluir(_id: string): Promise<boolean> {
    try {
      const resposta = await fetch(`${baseURL}/${_id}`, { method: "DELETE" });
      return resposta.ok;
    } catch (erro) {
      console.error("Erro ao excluir livro:", erro);
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
        autores: livro.autores
      };

      const resposta = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(livroMongo)
      });

      return resposta.ok;
    } catch (erro) {
      console.error("Erro ao incluir livro:", erro);
      return false;
    }
  }
}
