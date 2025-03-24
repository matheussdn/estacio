import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  standalone: false,
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
   
    this.servLivros.obterLivros().then(livros => {
      this.livros = livros;
      console.log(this.livros);
    });
    this.editoras = this.servEditora.getEditoras();
  }

 
  excluir = (codigo: string): void => {
    this.servLivros.excluir(codigo).then(() => {
  
      this.servLivros.obterLivros().then(livros => {
        this.livros = livros;
      });
    });
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}