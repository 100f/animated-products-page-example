import React from 'react';

import { AnimationProps } from 'framer-motion';

import { RoundedButton } from './styles';

const AddToCartButton: React.FC<AnimationProps | any> = ({
  children,
  ...AnimationProps
}) => <RoundedButton {...AnimationProps}>{children}</RoundedButton>;

export default AddToCartButton;
