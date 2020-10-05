import React from 'react';
import Head from 'next/head';
import GlobalStyle from '../styles/global';

import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
//Este componente especial basicamente intermedia a renderização de toda e qualquer página no projeto.
//logo, é comum tudo o que se for adicionar globalmente estar aqui.
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </AnimatePresence>
  );
};

export default App;
