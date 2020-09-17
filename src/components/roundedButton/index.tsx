import React from 'react';
import { RoundedButton } from './styles';

const AddToCartButton: React.FC = ({ children }) => (
  <RoundedButton>{children}</RoundedButton>
);

export default AddToCartButton;
