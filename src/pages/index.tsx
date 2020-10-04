import React from 'react';
import Head from 'next/head';

import { Product } from '../shared/types';

import { InferGetStaticPropsType } from 'next';

import Link from 'next/link';

import {
  ProductCard,
  ProductsContainer,
  ScreenContainer,
} from '@styles/products';

const list = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

const Homepage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  products,
}) => {
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>
      <ScreenContainer>
        <header>Produtos</header>
        <ProductsContainer initial="hidden" animate="visible" variants={list}>
          {products.map((product, i) => (
            <ProductCard key={product.id} variants={item}>
              <Link href={`/products/${product.id}`} key={product.id}>
                <a>
                  <div className="price-tag">
                    <span>R$ </span>
                    {product.price}
                  </div>
                  <div className="img-name">
                    <img src={product.image_url} alt="Produto" />
                    <h3>{product.name}</h3>
                  </div>
                </a>
              </Link>
            </ProductCard>
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
