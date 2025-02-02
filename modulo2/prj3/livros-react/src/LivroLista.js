import React from "react";

const LivroLista: React.FC<{ livros: any[], onExcluir: (codigo: number) => void, getNomeEditora: (codEditora: number) => string }> = ({ livros, onExcluir, getNomeEditora }) => {
  return (
    <div>
      <h2>Lista de Livros</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
            <th>Ações</th> {}
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro.codigo}>
              <td>{livro.titulo}</td>
              <td>{livro.resumo}</td>
              <td>{getNomeEditora(livro.codEditora)}</td> {}
              <td>{livro.autores.join(", ")}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onExcluir(livro.codigo)} 
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LivroLista;