

import Head from 'next/head';

const Home = () => {
  return (
    <div className="freengo-app">
      <Head>
        <title>FREENGO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/logo.png" alt="FREENGO" />
        <input type="text" placeholder="Rechercher" />
      </header>
      {/* ... (other components) */}
    </div>
  );
};

export default Home;
