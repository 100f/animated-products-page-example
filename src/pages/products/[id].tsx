import React, { useEffect } from 'react';
import { ScreenContainer } from '../../styles/product';
import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import db from '../../db.json';

interface ProductProps {
  id: number;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
}

const Product: React.FC<ProductProps> = ({
  id,
  name,
  description,
  price,
  image_url,
}) => {
  return (
    <ScreenContainer>
      <div></div>
    </ScreenContainer>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  const res = await fetch('http://localhost:3004/products');
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = () => {
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
