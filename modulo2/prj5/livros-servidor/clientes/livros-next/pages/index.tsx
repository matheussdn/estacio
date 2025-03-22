import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Página Inicial
        </h1>
      </main>
    </div>
  );
}

export default Home;