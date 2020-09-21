import styled from 'styled-components';

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: fit-content;
  height: 53px;
  padding: 9px 13px;

  background-color: #e2e5ff;
  border-radius: 13px;
`;

export const MoneySign = styled.text`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #b3b1ce;
`;

export const PriceValue = styled.text`
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: #8c81d0;
`;
