import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PriceContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: fit-content;
  height: 5.3rem;
  padding: 0.9rem 1.3rem;

  background-color: #e2e5ff;
  border-radius: 1.3rem;
`;

export const MoneySign = styled.text`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  color: #b3b1ce;

  margin-right: 0.4rem;
`;

export const PriceValue = styled.text`
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  font-weight: bold;
  color: #8c81d0;
`;
