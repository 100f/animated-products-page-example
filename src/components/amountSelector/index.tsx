import React, { useState } from 'react';

import { AnimationProps } from 'framer-motion';

import {
  MdKeyboardArrowDown as ArrowDown,
  MdKeyboardArrowUp as ArrowUp,
} from 'react-icons/md';
import { SelectorContainer } from './styles';

const AmountSelector: React.FC<AnimationProps | any> = ({
  ...AnimationProps
}) => {
  const [amount, setAmount] = useState<number>(1);

  return (
    <SelectorContainer {...AnimationProps}>
      <div className="quantity-text">Qtd.</div>
      <div className="amount">
        {amount}
        <div className="arrows">
          <ArrowUp
            size={16}
            onClick={() => amount < 99 && setAmount(prev => prev + 1)}
          />
          <ArrowDown
            size={16}
            onClick={() => amount > 1 && setAmount(prev => prev - 1)}
          />
        </div>
      </div>
    </SelectorContainer>
  );
};

export default AmountSelector;
