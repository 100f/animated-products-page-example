import React from 'react';
import { PriceContainer, MoneySign, PriceValue } from './styles';

interface PriceProps {
  price: number;
}
const PriceTag: React.FC<PriceProps> = ({ price }) => (
  <PriceContainer>
    <MoneySign>R$</MoneySign>
    <PriceValue>{price}</PriceValue>
  </PriceContainer>
);

export default PriceTag;
