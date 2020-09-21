import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import { Product } from '../../shared/types';

import {
  ProductImage,
  ProductInfoContainer,
  ScreenContainer,
} from '@styles/product';

import db from '../../db.json';
import PriceTag from '@components/PriceTag';
import AddToCartButton from '@components/RoundedButton';
import AmountSelector from '@components/AmountSelector';

const ProductPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  product,
}) => {
  return (
    <>
      <head>
        <title>{product.name}</title>
      </head>

      <ScreenContainer>
        <ProductImage src={product.image_url} alt="Imagem do Produto" />
        <ProductInfoContainer>
          <h1>{product.name}</h1>
          <h4>{product.description}</h4>

          <PriceTag price={product.price} />

          <div className="options">
            <AmountSelector />
            <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
          </div>
        </ProductInfoContainer>
      </ScreenContainer>
    </>
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
