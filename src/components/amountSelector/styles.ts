import styled from 'styled-components';

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 80px;
  height: 60px;

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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 22px;
    }
  }
`;
