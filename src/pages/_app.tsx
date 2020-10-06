import React from 'react';
import Head from 'next/head';

import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import GlobalStyle from '../styles/global';

//Este componente especial basicamente intermedia a renderização de toda e qualquer página no projeto.
//logo, é comum tudo o que se for adicionar globalmente estar aqui.
const App: React.FC<AppProps> = ({
  Component,
  pageProps,
  router,
}: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Head>
          <meta
            name="viewport"
            content="width=device-width initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
};

export default App;
