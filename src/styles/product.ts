import styled from 'styled-components';

export const ScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
`;
export const ProductImage = styled.img`
  width: 50rem;
  height: 44.2rem;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 45rem;
  height: 40.2rem;

  h1 {
    font-family: 'Rambla', sans-serif;
    font-size: 4.8rem;
    font-weight: bold;

    color: #424347;

    margin-bottom: 1.6rem;
  }

  h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.9rem;

    color: #8c8c8c;

    margin-bottom: 2.5rem;
  }
  div.options {
    display: flex;
    margin-top: 3.6rem;
  }
`;
