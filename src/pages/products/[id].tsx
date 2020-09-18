import React from 'react';

import {
  ProductImage,
  ProductInfoContainer,
  ScreenContainer,
} from '@styles/product';
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';

import { ParsedUrlQuery } from 'querystring';
import db from '../../db.json';
import PriceTag from '@components/priceTag';
import AddToCartButton from '@components/roundedButton';
import AmountSelector from '@components/amountSelector';

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
