import styled from 'styled-components';

export const ScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
`;
export const ProductImage = styled.img`
  width: 500px;
  height: 442px;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 450px;
  height: 402px;

  h1 {
    font-family: 'Rambla', sans-serif;
    font-size: 48px;
    font-weight: bold;

    color: #424347;

    margin-bottom: 16px;
  }

  h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #8c8c8c;

    margin-bottom: 25px;
  }
  div.options {
    display: flex;
    margin-top: 36px;
  }
`;
