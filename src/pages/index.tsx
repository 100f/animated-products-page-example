import React from 'react';
import Head from 'next/head';
import GlobalStyle from '@styles/global';

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Products</title>
      </Head>
      <main></main>
    </>
  );
};

export default Home;
