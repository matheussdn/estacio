import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LivroDados = ({ onAddBook }) => {
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(0);

  const navigate = useNavigate();

  const editoras = [
    { codEditora: 1, nome: "Alta Books" },
    { codEditora: 2, nome: "Pearson" },
    { codEditora: 3, nome: "Addison Wesley" }
  ];

  const opcoes = editoras.map(ed => ({
    value: ed.codEditora,
    text: ed.nome
  }));

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event) => {
    event.preventDefault();

    const autoresArray = autores.split("\n");
    const novoLivro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autoresArray,
      codEditora
    };

    onAddBook(novoLivro);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Adicionar Novo Livro</h2>
      <form onSubmit={incluir} className="form">
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">Resumo</label>
          <textarea
            id="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            className="form-control"
            rows={3}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">Autores (separados por linha)</label>
          <textarea
            id="autores"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            className="form-control"
            rows={3}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="editora" className="form-label">Editora</label>
          <select
            id="editora"
            value={codEditora}
            onChange={tratarCombo}
            className="form-control"
            required
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Adicionar Livro</button>
      </form>
    </div>
  );
};

export default LivroDados;