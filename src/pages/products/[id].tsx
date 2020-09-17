import React from 'react';
import { ScreenContainer } from '@styles/product';
import { useRouter } from 'next/router';
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

import db from '../../db.json';

interface ProductProps {
  id: number;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
}

const Product: React.FC = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ScreenContainer>
      <div>{product.price}</div>
    </ScreenContainer>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ProductProps & ParsedUrlQuery>
) => {
  //Aqui dentro de fato é feita a query, para que o produto encontrado seja passado como prop da page
  const { id } = context.params;
  const res = await fetch(`http://localhost:3004/products/${id}`);
  const product: ProductProps = await res.json();

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = db;

  return {
    paths:
      products.map(product => ({
        params: { id: String(product.id) },
      })) || [],
    fallback: false,
  };
};

export default Product;
