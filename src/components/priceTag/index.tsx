import React from 'react';
import { PriceContainer, MoneySign, PriceValue } from './styles';
import { AnimationProps } from 'framer-motion';

interface PriceProps {
  price: number;
}

const PriceTag: React.FC<PriceProps & AnimationProps> = ({
  price,
  ...AnimationProps
}) => (
  <PriceContainer {...AnimationProps}>
    <MoneySign>R$</MoneySign>
    <PriceValue>{price.toFixed(2)}</PriceValue>
  </PriceContainer>
);

export default PriceTag;
