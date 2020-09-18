import React from 'react';
import {
  MdKeyboardArrowDown as ArrowDown,
  MdKeyboardArrowUp as ArrowUp,
} from 'react-icons/md';
import { SelectorContainer } from './styles';

const AmountSelector: React.FC = () => {
  const amount = 1;

  return (
    <SelectorContainer>
      <div className="quantity-text">Qtd.</div>
      <div className="amount">
        {amount}
        <div className="arrows">
          <div className="increase">
            <ArrowUp size={16} />
          </div>
          <div className="decrease">
            <ArrowDown size={16} />
          </div>
        </div>
      </div>
    </SelectorContainer>
  );
};

export default AmountSelector;
