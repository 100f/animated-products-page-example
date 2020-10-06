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
    <PriceValue>{price}</PriceValue>
  </PriceContainer>
);

export default PriceTag;
