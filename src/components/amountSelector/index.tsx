import React, { useState } from 'react';
import {
  MdKeyboardArrowDown as ArrowDown,
  MdKeyboardArrowUp as ArrowUp,
} from 'react-icons/md';
import { SelectorContainer } from './styles';

const AmountSelector: React.FC = () => {
  const [amount, setAmount] = useState(1);

  return (
    <SelectorContainer>
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
