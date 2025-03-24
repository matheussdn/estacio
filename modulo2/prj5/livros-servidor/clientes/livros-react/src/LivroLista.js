import React, { useEffect, useState } from "react";
import { ControleLivros } from "../controle/ControleLivros"; 

const LivroLista: React.FC<{ getNomeEditora: (codEditora: number) => string }> = ({ getNomeEditora }) => {
  const [livros, setLivros] = useState<any[]>([]);
  const [carregado, setCarregado] = useState<boolean>(false);
  
  useEffect(() => {
    setCarregado(true);
    const controleLivros = new ControleLivros();
    controleLivros.obterLivros()
      .then((livrosObtidos) => {
        setLivros(livrosObtidos);
        setCarregado(false);
      })
      .catch((erro) => {
        console.error("Erro ao obter livros:", erro);
        setCarregado(false); 
      });
  }, []);

  const onExcluir = (codigo: string) => {
    setCarregado(true);
    const controleLivros = new ControleLivros();
    controleLivros.excluir(codigo)
      .then((sucesso) => {
        if (sucesso) {
          setLivros(livros.filter(livro => livro.codigo !== codigo)); 
        }
        setCarregado(false); 
      })
      .catch((erro) => {
        console.error("Erro ao excluir livro:", erro);
        setCarregado(false); 
      });
  };

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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <tr key={index}> {}
              <td>{livro.titulo}</td>
              <td>{livro.resumo}</td>
              <td>{getNomeEditora(livro.codEditora)}</td>
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