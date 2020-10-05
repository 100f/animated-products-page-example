import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { InferGetStaticPropsType } from 'next';
import { Product } from '../shared/types';

import { motion } from 'framer-motion';

import {
  ProductCard,
  ProductsContainer,
  ScreenContainer,
} from '@styles/products';

import { list, listItem, listItemHover, title } from 'src/animations';

const Homepage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  products,
}) => {
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>
      <ScreenContainer>
        <motion.header initial="hidden" animate="visible" variants={title}>
          Produtos
        </motion.header>
        <ProductsContainer initial="hidden" animate="visible" variants={list}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              variants={listItem}
              whileHover={listItemHover}
            >
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
