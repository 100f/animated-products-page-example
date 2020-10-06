import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RoundedButton = styled(motion.button)`
  width: 250px;
  height: 60px;
  background-color: #8c81d0;
  color: #fff;

  font-family: 'Roboto', sans-serif;
  font-size: 18px;

  border: none;
  border-radius: 10px;

  padding: 19px 35px;

  opacity: 1;
  transition: opacity, 0.3s;

  :hover {
    opacity: 0.75;
  }
`;
