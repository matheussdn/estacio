import React, { useEffect, useState } from "react";
import { ControleLivros } from "../controle/ControleLivros";

const LivroLista: React.FC<{ getNomeEditora: (codEditora: number) => string }> = ({ getNomeEditora }) => {
  const controleLivros = new ControleLivros();
  const [livros, setLivros] = useState<any[]>([]);
  const [carregado, setCarregado] = useState(false);

  
  useEffect(() => {
    setCarregado(false);
    controleLivros.obterLivros()
      .then((dados) => {
        setLivros(dados);
        setCarregado(true);
      })
      .catch((erro) => console.error("Erro ao carregar livros:", erro));
  }, []);

 
  const excluir = async (codigo: string) => {
    await controleLivros.excluir(codigo).then((sucesso) => {
      if (sucesso) {
        setLivros((prevLivros) => prevLivros.filter((livro) => livro._id !== codigo));
      }
      setCarregado(false); // Agora só chama após a exclusão
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
            <tr key={index}> {/* Usando index como key */}
              <td>{livro.titulo}</td>
              <td>{livro.resumo}</td>
              <td>{getNomeEditora(livro.codEditora)}</td>
              <td>{livro.autores.join(", ")}</td>
              <td>
                <button className="btn btn-danger" onClick={() => excluir(livro._id)}>
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