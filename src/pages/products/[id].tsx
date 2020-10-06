import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { ParsedUrlQuery } from 'querystring';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import { Product } from '../../shared/types';
import { MdArrowBack as Back } from 'react-icons/md';

import {
  ProductImage,
  ProductInfoContainer,
  ScreenContainer,
} from '@styles/product';

import db from '../../db.json';
import PriceTag from '@components/PriceTag';
import AddToCartButton from '@components/RoundedButton';
import AmountSelector from '@components/AmountSelector';

import { fadeIn, fadeInDown, fadeRight, stagger, title } from 'src/animations';

const ProductPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  product,
}) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>{product.name}</title>
      </Head>

      <ScreenContainer>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={title}
          className="back"
          whileHover={{ x: 5, opacity: 0.7 }}
          whileTap={{ x: 2, opacity: 0.6 }}
        >
          <Link href="/">
            <a>
              <Back size="2.3rem" color="#424347" />
              <h3>Voltar</h3>
            </a>
          </Link>
        </motion.div>

        <motion.div className="product">
          <ProductImage
            src={product.image_url}
            alt="Imagem do Produto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />

          <ProductInfoContainer
            initial="hidden"
            animate="visible"
            variants={stagger(0.12)}
          >
            <motion.h1 variants={fadeRight}>{product.name}</motion.h1>
            <motion.h4 variants={fadeRight}>{product.description}</motion.h4>

            <PriceTag price={product.price} variants={fadeRight} />

            <motion.div
              className="options"
              animate={{
                transition: {
                  duration: 0.5,
                  staggerChildren: 0.5,
                  delayChildren: 1.5,
                },
              }}
            >
              <AmountSelector
                initial="hidden"
                animate="visible"
                variants={fadeInDown}
              />
              <AddToCartButton
                initial="hidden"
                animate="visible"
                variants={fadeInDown}
              >
                Adicionar ao Carrinho
              </AddToCartButton>
            </motion.div>
          </ProductInfoContainer>
        </motion.div>
      </ScreenContainer>
    </motion.div>
  );
};

export const getStaticProps = async (
  context: GetStaticPropsContext<Product & ParsedUrlQuery>
) => {
  //Aqui dentro de fato é feita a query, para que o produto encontrado seja passado como prop da page
  const { id } = context?.params;
  const res = await fetch(`http://localhost:3004/products/${id}`);
  const product: Product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const { products } = db;

  return {
    paths:
      products.map(product => ({
        params: { id: String(product.id) },
      })) || [],
    fallback: false,
  };
};

export default ProductPage;
