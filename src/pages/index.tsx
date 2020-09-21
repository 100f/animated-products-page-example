import React from 'react';
import Head from 'next/head';

import { Product } from '../shared/types';

import { InferGetStaticPropsType } from 'next';

import Link from 'next/link';

import GlobalStyle from '@styles/global';
import {
  ProductCard,
  ProductsContainer,
  ScreenContainer,
} from '@styles/products';

const Homepage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  products,
}) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Products</title>
      </Head>
      <ScreenContainer>
        <header>Produtos</header>
        <ProductsContainer>
          {products.map(product => (
            <Link href={`/products/${product.id}`}>
              <a>
                <ProductCard key={product.id}>
                  <div className="price-tag">
                    <span>R$ </span>
                    {product.price}
                  </div>
                  <div className="img-name">
                    <img src={product.image_url} alt="Produto" />
                    <h3>{product.name}</h3>
                  </div>
                </ProductCard>
              </a>
            </Link>
          ))}
        </ProductsContainer>
      </ScreenContainer>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3004/products');
  const products: Array<Product> = await response.json();

  return {
    props: {
      products,
    },
  };
};

export default Homepage;
