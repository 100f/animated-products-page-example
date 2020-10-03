import styled from 'styled-components';

export const ScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1070px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ProductImage = styled.img`
  width: 50rem;
  height: 44.2rem;

  @media (max-width: 500px) {
    width: 42.5rem;
    height: 37.57rem;
  }

  @media (max-width: 425px) {
    width: 32.5rem;
    height: 28.73rem;
  }

  @media (max-width: 320px) {
    margin-left: 6em;
  }
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

    @media (max-width: 500px) {
      font-size: 4rem; /*65% do original */
    }

    @media (max-width: 320px) {
      font-size: 3rem;
    }
  }

  h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.9rem;

    color: #8c8c8c;

    margin-bottom: 2.5rem;

    @media (max-width: 500px) {
      font-size: 1.04rem; /*65% do original */
      font-weight: bold;
      line-height: 1.235rem;
    }
  }
  div.options {
    display: flex;
    margin-top: 3.6rem;
  }

  @media (max-width: 1070px) {
    margin-bottom: 10em;
  }

  @media (max-width: 425px) {
    padding: 0 5em;
  }
  @media (max-width: 375px) {
    padding: 0 6em;
  }
  @media (max-width: 320px) {
    padding: 0 8em;
  }
`;
