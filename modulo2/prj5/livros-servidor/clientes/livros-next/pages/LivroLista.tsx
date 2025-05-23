import { useState, useEffect } from 'react';
import { Livro } from '../classes/modelo/Livro'; 
import { LinhaLivro } from '../componentes/LinhaLivro'; 
import styles from '../styles/Home.module.css';
import { Menu } from '../componentes/Menu';
import Head from 'next/head';
import { ControleLivros } from '../classes/controle/ControleLivros'; 

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);


  const controleLivros = new ControleLivros();


  useEffect(() => {
    controleLivros.obterLivros().then((livrosObtidos) => {
      setLivros(livrosObtidos);
      setCarregado(true);
    }).catch((error) => {
      console.error("Erro ao obter livros:", error);
    });
  }, []);

 
  const excluir = (codigo: string) => {
    controleLivros.excluir(codigo).then(() => {
      setCarregado(false); 
      controleLivros.obterLivros().then((livrosObtidos) => {
        setLivros(livrosObtidos);
        setCarregado(true); 
      }).catch((error) => {
        console.error("Erro ao obter livros após exclusão:", error);
      });
    }).catch((error) => {
      console.error("Erro ao excluir livro:", error);
    });
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
            {livros.map((livro, index) => (
              <LinhaLivro
                key={index}  
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