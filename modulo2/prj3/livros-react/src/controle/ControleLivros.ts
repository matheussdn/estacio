import { Livro } from "../modelo/Livro";

export class ControleLivros {
  livros: Array<Livro> = [
    new Livro(1, 1, "Use a Cabeça: Java", "Uma experiência de aprendizado em programação orientada a objetos (OO) e Java.", ["Bert Bates", "Kathy Sierra"]),
    new Livro(2, 2, "Java como Programar", "Milhões de alunos e profissionais aprenderam programação com os livros Deitel.", ["Paul Deitel", "Harvey Deitel"]),
    new Livro(3, 3, "Core Java for the Impatient", "Core Java books for those looking for a comprehensive guide to Java.", ["Cay Horstmann"])
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}