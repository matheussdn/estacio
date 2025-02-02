// pages/LivroLista.tsx
import { useState, useEffect } from 'react';
import { Livro } from '../classes/modelo/Livro'; 
import { LinhaLivro } from '../componentes/LinhaLivro'; 
import styles from '../styles/Home.module.css';
import { Menu } from '../componentes/Menu';
import Head from 'next/head';

const LivroLista: React.FC = () => {
  const baseURL = "http://localhost:3000/api/livros";
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

 
  const obterLivros = async () => {
    try {
      const res = await fetch(baseURL);
      const data = await res.json();
      setLivros(data);
      setCarregado(true);
    } catch (error) {
      console.error("Erro ao obter livros:", error);
    }
  };

 
  const excluirLivro = async (codigo: number) => {
    try {
      const res = await fetch(`${baseURL}/${codigo}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.ok) {
        setCarregado(false);
        obterLivros();
      }
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
    }
  };

  useEffect(() => {
    obterLivros();
  }, []);


  const excluir = (codigo: number) => {
    excluirLivro(codigo);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de Livros</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Lista de Livros</h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Título</th>
              <th>Autores</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={() => excluir(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;