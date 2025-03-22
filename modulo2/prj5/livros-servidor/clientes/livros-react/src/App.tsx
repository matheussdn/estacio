import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";


const editoras = [
  { codEditora: 1, nome: "Alta Books" },
  { codEditora: 2, nome: "Pearson" },
  { codEditora: 3, nome: "Addison Wesley" }
];

const App: React.FC = () => {
  const [livros, setLivros] = useState([
    { codigo: 1, titulo: "Use a Cabeça: Java", resumo: "Java programming", autores: ["Bert Bates", "Kathy Sierra"], codEditora: 1 },
    { codigo: 2, titulo: "Java como programar", resumo: "Learning Java", autores: ["Paul Deitel", "Harvey Deitel"], codEditora: 2 },
    { codigo: 3, titulo: "Core Java for the Impatient", resumo: "Core Java", autores: ["Cay Horstmann"], codEditora: 3 }
  ]);

  const addBook = (book: any) => {
    setLivros((prevBooks) => [...prevBooks, book]);
  };

  const excluirLivro = (codigo: number) => {
    setLivros((prevLivros) => prevLivros.filter(livro => livro.codigo !== codigo));
  };


  const getNomeEditora = (codEditora: number): string => {
    const editora = editoras.find(ed => ed.codEditora === codEditora);
    return editora ? editora.nome : "Editora desconhecida";
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">Lista de Livros</Link>
          <Link className="nav-item nav-link" to="/dados">Adicionar Livro</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LivroLista livros={livros} onExcluir={excluirLivro} getNomeEditora={getNomeEditora} />} />
        <Route path="/dados" element={<LivroDados onAddBook={addBook} />} />
      </Routes>
    </Router>
  );
};

export default App;