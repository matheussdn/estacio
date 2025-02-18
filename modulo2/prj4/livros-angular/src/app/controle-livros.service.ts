import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    new Livro(1, 1, 'Clean Code', 'Um manual de boas práticas para desenvolvimento de software.', ['Robert C. Martin']),
    new Livro(2, 2, 'You Don’t Know JS', 'Série de livros que explora os detalhes do JavaScript.', ['Kyle Simpson']),
    new Livro(3, 3, 'The Pragmatic Programmer', 'Abordagem prática para desenvolvimento de software.', ['Andrew Hunt', 'David Thomas'])
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    this.livros.push(livro);
  }
  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}