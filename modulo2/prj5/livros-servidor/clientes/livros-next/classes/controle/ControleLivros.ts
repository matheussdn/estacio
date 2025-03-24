import { Livro } from "../modelo/Livro";

export class ControleLivros {

  async obterLivros(): Promise<Livro[]> {
    const response = await fetch("http://localhost:5000/api/livros"); 
    if (!response.ok) {
      throw new Error("Erro ao obter os livros");
    }
    const livrosData = await response.json();
    return livrosData.map((livroData: any) => new Livro(
      livroData.codigo,
      livroData.codEditora,
      livroData.titulo,
      livroData.resumo,
      livroData.autores
    ));
  }

  async incluir(livro: Livro): Promise<void> {
    const response = await fetch("http://localhost:5000/api/livros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        codigo: "", 
        codEditora: livro.codEditora,
        titulo: livro.titulo,
        resumo: livro.resumo,
        autores: livro.autores,
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao incluir o livro");
    }
  }

  async excluir(codigo: string): Promise<void> {
    const response = await fetch(`http://localhost:5000/api/livros/${codigo}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao excluir o livro");
    }
  }
}