import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SelectorContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 80px;
  height: 60px;

  margin-right: 24px;

  border: 1px solid #8c81d0;
  border-radius: 10px;

  div.quantity-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-weight: medium;

    color: #8c8c8c;

    margin-left: 14px;
    margin-top: 3px;
  }
  div.amount {
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #424347;

    margin-left: 14px;

    div.arrows {
      position: absolute;
      right: 8px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
