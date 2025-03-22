import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ControleEditora } from '../classes/controle/ControleEditora'; 
import styles from '../styles/Home.module.css';
import { Menu } from '../componentes/Menu';
import Head from 'next/head';

const LivroDados: React.FC = () => {
  const baseURL = "http://localhost:3000/api/livros";
  const [opcoes, setOpcoes] = useState<{ value: number; text: string }[]>([]);
  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<number>(0);
  const router = useRouter();


  const controleEditora = new ControleEditora();


  const obterEditoras = async () => {
    try {
      const editoras = await controleEditora.getEditoras();
      const editorasOptions = editoras.map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
      }));
      setOpcoes(editorasOptions);
    } catch (error) {
      console.error("Erro ao obter editoras:", error);
    }
  };

  useEffect(() => {
    obterEditoras();
  }, []);


  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };


  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    try {
      const res = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livro),
      });

      const data = await res.json();
      if (data.ok) {
        router.push('/LivroLista');
      }
    } catch (error) {
      console.error("Erro ao incluir livro:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Adicionar Livro</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Adicionar Livro</h1>
        <form onSubmit={incluir}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Título</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="resumo" className="form-label">Resumo</label>
            <textarea
              className="form-control"
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="autores" className="form-label">Autores</label>
            <textarea
              className="form-control"
              id="autores"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="codEditora" className="form-label">Editora</label>
            <select
              className="form-select"
              id="codEditora"
              value={codEditora}
              onChange={tratarCombo}
            >
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Adicionar</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;