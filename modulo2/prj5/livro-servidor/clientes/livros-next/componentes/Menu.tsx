import Link from 'next/link';
import React from 'react';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/" passHref>
          <a className="navbar-brand">Sistema de Livros</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" passHref>
                <a className="nav-link">Início</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroLista" passHref>
                <a className="nav-link">Lista de Livros</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados" passHref>
                <a className="nav-link">Adicionar Livro</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}